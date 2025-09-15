import React from 'react';
import { User } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Jayanta Bhattacharya",
      title: "Co-Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Bidus Kanti Das",
      title: "Co-Founder",
      image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Prakash Ajay Taksal",
      title: "CEO",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Chandra Sekhar Tiwari",
      title: "Advisor",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-description">
            Meet the visionary leaders and experts driving innovation at Sabuj Tech Private Limited.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-photo">
                <div className="photo-container">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="member-image"
                    />
                  ) : (
                    <User className="placeholder-icon" />
                  )}
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;