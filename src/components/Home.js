import React, { useState, useEffect } from "react";
import { data } from "../data";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSet, setDataSet] = useState(data);

  const handleSearch = () => {
    const newValue = dataSet.filter((item) => {
      return item.para.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (searchTerm === "") {
      setDataSet(data);
    } else if (searchTerm !== "") {
      setDataSet(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateInput = (e) => {
    const newText = e.target.value;
    setSearchTerm(newText);
    refresh();
  };

  const refresh = () => {
    if (searchTerm === "") {
      setDataSet(data);
    }
  };

  useEffect(() => {
    refresh();
  }, [searchTerm]);
  return (
    <section className="section-container">
      <h4>How may we help You?</h4>
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a topic or question"
          value={searchTerm}
          onChange={updateInput}
        />

        <button className="btn" onClick={handleSearch}>
          find an answer
        </button>
      </form>

      {dataSet.map((item) => {
        const { id, icon, para } = item;
        return (
          <article key={id} className="body">
            <div>
              <p>{para}</p>
              {icon}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Home;
