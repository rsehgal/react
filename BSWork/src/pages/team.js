import React from "react";
import BS_Card from "../bscomponents/BS_Card";
import data from "../data/team.json";

export default function Team() {

    return (
        <>
            {
                data.map(item => (
                    <div>
                        <BS_Card
                            card_img={`images/${item.img}`}
                            card_title={item.name}
                            card_text={item.role}
                            img_boundary="rounded-circle border border-danger"
                            card_boundary="border-0 border-warning text-center"
                            card_text_color="primary"
                            card_bg
                            
                        />
                    </div>
                ))
            }
        </>

    );
}