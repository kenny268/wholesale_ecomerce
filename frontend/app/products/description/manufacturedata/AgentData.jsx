import { useEffect, useState } from "react";

const AgentData = ({ id }) => {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/agent/${id}`);
        const data = await response.json();
        setAgent(data);
      } catch (error) {
        console.error("Error fetching agent data:", error);
      }
    };

    if (id) {
      fetchAgentData();
    }

    // Cleanup function (optional)
    return () => {
      // Any cleanup logic can go here if needed
    };
  }, [id]);

  return (
    <div>
      {agent && (
        <div>
          <h3>{agent.businessName}</h3>
          <p>Contact Person: {agent.contactPerson}</p>
          <p>Phone: {agent.phone}</p>
        </div>
      )}
    </div>
  );
};

export default AgentData;
