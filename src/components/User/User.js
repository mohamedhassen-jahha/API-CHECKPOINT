import React from "react";
import "./User.css";

function User(props) {
  return (
    <div className="User">
      <div className="User__infos">
        <h3 className="User__infos--id">{props.id}</h3>
        <div className="User__Moreinfos1">
          <h3 className="User__infos--name User__infos-font">
            Nom et prénom:
            <br />
            <span>{props.data.name}</span>
          </h3>
          <h3 className="User__infos--ste User__infos-font">
            Ste.:
            <br />
            <span>{props.data.company.name}</span>
          </h3>
          <h3 className="User__infos--activite User__infos-font">
            Secteur d'activité:
            <br />
            <span>{props.data.company.bs}</span>
          </h3>
        </div>
      </div>

      <div className="User__Moreinfos2">
        <div className="User__Moreinfos2-main">
          <h3 className="User__Moreinfos--mail User__infos-font">
            Email: <br />
            <span>{props.data.email}</span>
          </h3>
          <h3 className="User__Moreinfos--phone User__infos-font">
            Phone: <br />
            <span>{props.data.phone}</span>
          </h3>
          <h3 className="User__Moreinfos--site User__infos-font">
            Website:
            <br />
            <span>{props.data.website}</span>
          </h3>
        </div>
        <p className="User__Moreinfos--adresse User__infos-font">
          Adresse: <br />
          <span>
            {props.data.address.suite}, {props.data.address.street} -
            {props.data.address.zipcode}, {props.data.address.city}
          </span>
        </p>
      </div>
    </div>
  );
}

export default User;
