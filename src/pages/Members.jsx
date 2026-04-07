import React, { useEffect, useMemo, useState } from "react";
import MemberCard from "../components/Members/MemberCard";
import SemsName from "../components/Members/SemsName";
import ToTopButton from "../components/ToTopButton";
import { getJson } from "../utils/api";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMembers = async () => {
      try {
        const data = await getJson('/api/members');
        if (isMounted) {
          setMembers(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load members at the moment.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMembers();
    return () => {
      isMounted = false;
    };
  }, []);

  const leadMember = members[0] ?? null;
  const otherMembers = useMemo(() => (leadMember ? members.slice(1) : members), [leadMember, members]);

  const memberRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < otherMembers.length; i += 2) {
      rows.push(otherMembers.slice(i, i + 2));
    }
    return rows;
  }, [otherMembers]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            Our Team
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-lg">
            <span className="hover:text-[rgb(230,197,37)] transition-colors cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-[rgb(230,197,37)]">Members</span>
          </div>
          <div className="mt-8 w-24 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Home Branch Members
          </h2>
          <div className="w-24 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto mb-8"></div>
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            We are a group of individuals based in IIT Kharagpur who have seen the success of the strategies and plans of GYWS, IIT Kharagpur, one of India's largest govt. reg. student run NGO which aims at the socio economic development of the underprivileged near the IIT Kharagpur campus. We were inspired to reciprocate the same to various other parts of the nation so as to create a greater impact by spreading knowledge and experience gained through GYWS which has been running successfully since 2002 and now has over 150 active members and a budget of 30 lakh INR per annum. LiGHT currently aims at forming teams of spirited students in various colleges across India and we have already succeeded in convincing over 20 colleges which include various reputed IITs, NITs and IIITs.
          </p>
        </div>
      </div>

      {/* Members Section */}
      <div className="bg-gray-50 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Leaders
            </h3>
            <div className="w-20 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto"></div>
          </div>

          {loading && (
            <div className="text-center text-gray-500 mb-16">Loading team members...</div>
          )}

          {error && !loading && (
            <div className="text-center text-red-600 mb-16">{error}</div>
          )}

          {!loading && !error && leadMember && (
            <div className="flex justify-center mb-16">
              <MemberCard
                key={leadMember.id}
                name={leadMember.name}
                role={leadMember.role}
                imageUrl={leadMember.imageUrl}
                facebook={leadMember.facebook}
                linkedin={leadMember.linkedin}
              />
            </div>
          )}

          {!loading && !error && memberRows.map((row, rowIndex) => (
            <div key={`member-row-${rowIndex}`} className="flex justify-center gap-8 flex-wrap mb-16">
              {row.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  facebook={member.facebook}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          ))}

          {/* Sems Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Senior Executive Members
            </h3>
            <div className="w-20 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto mb-8"></div>
          </div>
          <SemsName />
          <ToTopButton />
        </div>
      </div>
    </div>
    
  );
}