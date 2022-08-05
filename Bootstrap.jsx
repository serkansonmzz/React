import { Button } from "react-bootstrap";

import './style.css'

export default function Bootstrap() {
  const name = "Serkan"

/*
  !className kullanmak zorundayım
  !direk içerde style veremem
   style={{ buraya tanımlıyorum color:...; gibi}} bide isimlerde - yok justifyContent olacak gibi
  !foreach dönerken key ver
  tabIndex="1,2,3" tabın harekt sırasını verebiliyorsun
  onClick
  onChange hep camel case kullanıyoruz
   her türlü {} s,sl, parentez içi javascript ifadesi yazabiliyorum 

   { todos.map(function(todo, index) {
                                       aşagıdaki map aslında normalde boyle süslü parantez açınca return demek zorunda kalıyoruz ama aşagıa düz parantezler bunu istemiyor
           
           return <li key={index} className="li"> {todo} </li>

   })}
  Fragmentler var onu da unutma lazım olur
*/
const todos = ['todo1','todo2','todo3']
  return (

    <>
       <h1>Serkan Sönmez Yapılacaklar</h1>
          <ul>
              {todos.map((todo, index) => (
                <li key={index} className="li">
                  {todo}
                </li>
              ))}
          </ul>
       <Button  variant="success"> Button </Button>
    </>

  )
}
