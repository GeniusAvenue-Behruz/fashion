<?php
ob_start();
$API_KEY = "6120496676:AAHWyK-IwL0G_jQrUc-hu2AnbgHhUqHRwQU";
define('API_KEY', $API_KEY);

function bot($method, $datas = [])
{
    $url = "https://api.telegram.org/bot" . API_KEY . "/" . $method;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $datas);
    $res = curl_exec($ch);
    if (curl_error($ch)) {
        var_dump(curl_error($ch));
    } else {
        return json_decode($res);
    }
}

// Function to get the directory for a user
function getUserDirectory($user_id)
{
    $dir = __DIR__ . "/users/$user_id";
    if (!file_exists($dir)) {
        mkdir($dir, 0777, true);  // Create the user directory if it doesn't exist
    }
    return $dir;
}

// Function to check if the user has added at least 20 members
function hasEnoughMembers($user_id)
{
    $file_path = getUserDirectory($user_id) . "/members.json";
    if (!file_exists($file_path)) {
        return false;  // If the file doesn't exist, they haven't added members
    }
    $data = json_decode(file_get_contents($file_path), true);
    return count($data['members_added']) >= 20;
}

// Function to add a new member to the user's list
function addMember($user_id, $new_member_id)
{
    $file_path = getUserDirectory($user_id) . "/members.json";

    // Read the current data or initialize if file doesn't exist
    if (file_exists($file_path)) {
        $data = json_decode(file_get_contents($file_path), true);
    } else {
        $data = ['members_added' => []];
    }

    // Add the new member if not already in the list
    if (!in_array($new_member_id, $data['members_added'])) {
        $data['members_added'][] = $new_member_id;
        file_put_contents($file_path, json_encode($data));
    }
}

// Function to restrict a user from sending messages
function restrictUser($chat_id, $user_id)
{
    bot('restrictChatMember', [
        'chat_id' => $chat_id,
        'user_id' => $user_id,
        'permissions' => json_encode([
            'can_send_messages' => false,
            'can_send_media_messages' => false,
            'can_send_other_messages' => false,
            'can_add_web_page_previews' => false
        ])
    ]);
}

// Function to allow a user to send messages
function allowUser($chat_id, $user_id)
{
    bot('restrictChatMember', [
        'chat_id' => $chat_id,
        'user_id' => $user_id,
        'permissions' => json_encode([
            'can_send_messages' => true,
            'can_send_media_messages' => true,
            'can_send_other_messages' => true,
            'can_add_web_page_previews' => true
        ])
    ]);
}

// Retrieve incoming message data
$update = json_decode(file_get_contents('php://input'));
$message = $update->message;
$chat_id = $message->chat->id;
$user_id = $message->from->id;
$text = $message->text;

// Handle new member joins
if (isset($update->message->new_chat_member)) {
    $new_member_id = $update->message->new_chat_member->id;
    $inviter_id = $user_id; // Assuming the user who invited is the one who sent this update
    addMember($inviter_id, $new_member_id);

    // Send a debug message with inviter and new member IDs
    bot('sendMessage', [
        'chat_id' => $chat_id,
        'text' => "Debug: Inviter ID: $inviter_id, New Member ID: $new_member_id",
    ]);

    // Send confirmation message for the added member count
    bot('sendMessage', [
        'chat_id' => $chat_id,
        'text' => "New member added! You now have " . count(json_decode(file_get_contents(getUserDirectory($inviter_id) . "/members.json"), true)['members_added']) . " members added."
    ]);

    // Check if the inviter can now be allowed to message
    if (hasEnoughMembers($inviter_id)) {
        allowUser($chat_id, $inviter_id);  // Allow user to message if they have added 20 members
    }
}

if ($text == "/start") {
    bot('sendMessage', [
        'chat_id' => $chat_id,
        'text' => "Salom, Привет",
    ]);
} else {
    if (hasEnoughMembers($user_id)) {
        bot('sendMessage', [
            'chat_id' => $chat_id,
            'text' => "You are allowed to write messages.",
        ]);
        allowUser($chat_id, $user_id);  
    } else {
        bot('sendMessage', [
            'chat_id' => $chat_id,
            'text' => "You need to add at least 20 members to participate.",
        ]);
        restrictUser($chat_id, $user_id);  
    }
}
?>