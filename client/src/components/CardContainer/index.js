import React from "react";

function CardContainer({ children }){
    return (
      <div className="card-container-wrapper">
          {children}
      </div>
    );
}
export default CardContainer;