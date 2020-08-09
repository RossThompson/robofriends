import React from 'react'

const Searchbox =({searchfield,searchChange})=>{
    return (
        <input placeholder='search'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        onChange={searchChange}
        ></input>
    )
}

export default Searchbox