import './app.css';
import React, { createContext, Fragment, useEffect, useReducer, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './component/header';
import Content from './component/content';
import Error from './component/error';
import { TourAPI } from './service/tourAPI';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Loading from './component/loading/loading';
import {ReviewAPI} from "./service/reviewAPI"




const reducer = function (state, action) {


  console.log(action.type)
  switch (action.type) {
    case "setDatas":
      return {...state,datas:action.datas};

    case "load":
    return{...state,loading:action.loading}


    case"search":
    break;
    default:
      break;
  }

  return state;

}

const tourAPI = new TourAPI();
const reviewAPI = new ReviewAPI();
export const Store = createContext({});
export const Api = createContext({});
function App() {

  const [state, dispatch] = useReducer(reducer,{version : 1.0,datas:null,loading:false});


console.log(state.loading+'로딩')
  useEffect(() => {
    dispatch({type:"load",loading:true})
    tourAPI.getInfos()
      .then(recv => {
        dispatch({ type: "setDatas", datas: recv.TourDestBaseInfo });
      }).then(()=>{
    dispatch({type:"load",loading:false})
      })
      .catch(e => {
    dispatch({type:"load",loading:false})

        console.log(e.message)
      })
  }, [])

  return (
    <Fragment>
      <div className="App">
        {state.loading&&<Loading/>}
        <Store.Provider value = {state.datas}>
        <Header />
        <BrowserRouter>
              <Api.Provider value= {reviewAPI}>
          <Routes>

            {state.datas&&['/','/detail/:id'].map(path=><Route path={path} key={path} element={<Content />} />)}
            <Route path='*' element={<Error />} />
            {/* 별처리는 없는 경로 */}
          </Routes>
              </Api.Provider>
        </BrowserRouter>

        </Store.Provider>
      </div>
    </Fragment>
  );
}

export default App;
