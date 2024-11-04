import React from 'react';

const TeamMember = ({ member }) => {
    return (
        <div className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
        </div>
    );
};

export default TeamMember;
