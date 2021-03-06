import React from 'react'
import './Sort.css'

const Sort = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }

  return (
    <div>
      <form className="sort-container" onSubmit={props.handleSubmit}>
            <label className='label-sort' htmlFor="sort"> Results: {props.queriedEquipments.length}</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                <option value="savings-ascending">&nbsp; Savings, low to high &nbsp;</option>
                <option value="savings-descending">&nbsp; Savings, high to low &nbsp;</option>
            </select>
      </form>
      </div>
    )
}

export default Sort