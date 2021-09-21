import React from 'react';
import { useForm } from '../../hooks/useForm';
import { juices } from '../../data/juices';
import { JuiceCard } from '../JuicesScreen/JuiceCard';

export const SearchScreen = () => {

  const detoxFiltered = juices;
  const [ formValues, handleInputChange ] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searchText');
  }


  return (
    <div>
      <h1>Search Screen</h1>

      <div className="row">

        <div className="col-5">
          <h4>Search Form</h4>

          <form onSubmit={ handleSearch }>
            <input 
              type="text"
              placeholder="Find detox symptoms"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn m-1 btn-block kaleBtn"
            >
                Search
            </button>
          </form>
          </div>
          <div className="col-7">
            <h4> Results </h4>

              {
                detoxFiltered.map( juice => (
                  <JuiceCard 
                      key={juice.id}
                      { ...juice} >
                  </JuiceCard>
                ))
              }

          </div>

       
      </div>
    </div>
  )
}
