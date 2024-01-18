import { useState } from "react";
import Mentor from "@/layout/mentor/Mentor";

const NewCase = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pathway, setPathway] = useState("");
  const [subCounty, setSubCounty] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = () => {
    console.log("Case submitted:", {
      title,
      description,
      pathway,
      subCounty,
      active,
    });
  };

  return (
    <Mentor>
      <h1>Create a New Case</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br /> <br />
        <label>
          Pathway:
          <select value={pathway} onChange={(e) => setPathway(e.target.value)}>
            <option value="" disable>
              -----
            </option>
            <option value="Health">Health</option>
            <option value="tvet">TVET Course</option>
            <option value="currently employed">Currently Employed</option>
            <option value="business">Running a business</option>
            <option value="creative arts">Creative Arts</option>
            <option value="enterprenurship">Enterprenurship</option>
            <option value="hospitality tourism">
              {" "}
              Hospitality ans Tourism
            </option>
            <option value="digital literacy">Digital Literacy</option>
            <option value="formal and informal">
              Looking for formal/informal employment
            </option>
          </select>
        </label>
        <br /> <br />
        <label>
          Sub County:
          <select
            type="text"
            value={subCounty}
            onChange={(e) => setSubCounty(e.target.value)}
          >
            <option value="" disable>
              -----
            </option>
            <option value="kisauni">Kisauni</option>
            <option value="jomvu">Jomvu</option>
            <option value="changamwe">Changamwe</option>
            <option value="mvita">Mvita</option>
            <option value="nyali">Nyali</option>
            <option value="likoni">Likoni</option>
            <option value="outside mombasa"> Oustide Mombasa</option>
          </select>
        </label>
        <br />
        <label>
          Active:
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
          />
        </label>
        <br /> <br />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </Mentor>
  );
};

export default NewCase;
