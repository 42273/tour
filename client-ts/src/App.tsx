import React, { createContext, Reducer, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './component/loading/loading';
import ErrorComponent from './component/error';
import Header from './component/header';

import Content from './component/content';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ReviewAPI } from './service/reviewAPI';
import { TourAPI } from './service/tourAPI';
import { ItemDatatype } from './component/item';

type actionType = {
  type: "load" | "search" | "setDatas";
  loading?: boolean;
  datas?: ItemDatatype[];
}
type reducerStateType = {
  version: number;
  datas?: null | ItemDatatype[];
  loading?: boolean;
}
const initState:reducerStateType = { version: 1.0, datas: null as any, loading: false }
const reducer = function (state: reducerStateType, action: actionType) {

  console.log(action.type)
  switch (action.type) {
    case "setDatas":
      return { ...state, datas: action.datas };
    case "load":
      return { ...state, loading: action.loading }
    case "search":
      break;
    default:
      break;
  }
  return state;
}


const tourAPI = new TourAPI("http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo");
const reviewAPI = new ReviewAPI("http://127.0.0.1:8070/api/tour");
export const Store = createContext<ItemDatatype[]>([]as any);
export const Api = createContext(reviewAPI);

function App() {
  const [state, dispatch] = useReducer<Reducer<reducerStateType,actionType>>(reducer ,initState );


  console.log(state.loading + '로딩')
  useEffect(() => {
    dispatch({ type: "load", loading: true })

    tourAPI.getInfos()
      .then(recv => {
        dispatch({ type: "setDatas", datas: recv.TourDestBaseInfo });
      }).then(() => {
        dispatch({ type: "load", loading: false })
      })
      .catch((e: unknown) => {
        dispatch({ type: "load", loading: false })
        if (e instanceof Error) console.log(e.message)
      })
  }, [])




  return (
    <>
      <div className="App">
        {state.loading && <Loading />}
        <Store.Provider value={state.datas!}>
          <Header />
          <BrowserRouter>
            <Api.Provider value={reviewAPI}>
              <Routes>
                {state.datas && ['/', '/detail/:id'].map(path => <Route path={path} key={path} element={<Content />} />)}
                <Route path='*' element={<ErrorComponent />} />
              </Routes>
            </Api.Provider>
          </BrowserRouter>
        </Store.Provider>
      </div>
    </>
  );
}

export default App;
