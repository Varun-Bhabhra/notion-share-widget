import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SharingFooter from "./SharingFooter";
import JSONDATAPERSON from "../MOCK_DATA_PERSON.json";
import JSONDATAGROUP from "../MOCK_DATA_GROUP.json";

const SearchWindow = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section id="search_window_container" className="">
      {/* Input */}
      <article className="search_input_section">
        <div className="search_input_btn_div">
          <input type="search" placeholder="Search people, emails or groups" onChange={event => setSearchTerm(event.target.value)} />
          <Dropdown/>
          <button className="invite_btn">Invite</button>
        </div>
      </article>

      <section className="selection_section">
        <h3 className="select_person_heading">Select a person</h3>
        {JSONDATAPERSON.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="person" key={key}>
              <img src={val.img} alt="avatar"/>
              <div className="person_details">
                <header>{val.name}</header>
                <aside>{val.email}</aside>
              </div>
            </div>
          )
        })}
      </section>

      <section className="selection_section">
        <h3 className="select_person_heading">Select a group</h3>
        {JSONDATAGROUP.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.group.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          } 
        }).map((val, key) => {
          return (
            <div className="person" key={key}>
              <img src={val.img} alt="avatar"/>
              <div className="person_details">
                <header>{val.group}</header>
              </div>
            </div>
          )
        })}
      </section>    

      {/* Footer  */}
      <SharingFooter/>
    </section>
  )
};

export default SearchWindow;