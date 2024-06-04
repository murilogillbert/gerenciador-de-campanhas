import { useState } from "react";
import Campaing from "../components/Campaing/Campaing";

const initialCampaings = [
    { title: "campanha1", description: "Uma descrição", amountEmails: 100 },
    { title: "campanha2", description: "Uma descrição", amountEmails: 100 },
    { title: "campanha3", description: "Uma descrição", amountEmails: 100 },
    { title: "campanha4", description: "Uma descrição", amountEmails: 100 },
];

export default function Gerenciador() {
    const [campaings, setCampaings] = useState(initialCampaings);

    function removeCampaing(index) {
        setCampaings(campaings.filter((_, i) => i !== index));
    }

    return (
        <div className="container">
            <div className="campanhas">
                {campaings.map((item, index) => (
                    <Campaing
                        key={index}
                        title={item.title}
                        description={item.description}
                        amountEmails={item.amountEmails}
                        remove={() => removeCampaing(index)}
                    />
                ))}
            </div>

            <div className="criarCampanhas">
                {/* Adicione aqui o código para criar novas campanhas */}
            </div>
        </div>
    );
}
