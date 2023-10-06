import React, {  useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from "axios"
import {Link} from "react-router-dom"
import { TwitterShareButton} from 'react-share'

const Container = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;

   h2{
    font-size: 50px;
   }

   p{
    width: 900px;
    text-align: center;
   }
   h3{
      font-size: 30px;
   }
`
const Input = styled.input`
    height: 40px;
    width: 400px;
    padding-left:10px;
`
const CardHold = styled.div`
     padding-left:20px;
     display: flex;
     flex-wrap:wrap;
     gap: 10px;
     justify-content: center;
     align-items: center;
`
const NewsCat = styled.div`
     font-size: 40px;
     font-weight:bold;
     display: flex;
     gap: 20px;
`
const Card = styled.div`
    height: 270px;
    width: 300px;
    border:1px solid gray;
    border-radius:5px;
  
`
const NewsCard = styled.div`
     height: 150px;
     width: 300px;
     border: 1px solid gray;
     border-radius:5px;
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
`
const NewsImage = styled.img`
    height: 100px;
    width: 100%;
    object-fit: cover;
`
const Hold = styled.div`
  display: flex;
  gap:20px;
`
const Select = styled.select`
   padding: 10px;
`


interface PropsData{
  content:string;
  title:string;
  description:string;
  image:string;
   url:string;
  publishedAt:string;
   source:{ 
     name:string;
     url:string;
   };
}


const HomePage:React.FC = () => {
  const [NewsData, setNewsData] = useState([])
  const [Search, setSearch] = useState("")
  const [country, setCountry] = useState("")
  const [language, setlanguage] = useState("")

  const apiKey ='402e8b72c6f14d07d8169efa6a688e2c';
 const url = `https://gnews.io/api/v4/search?q=${Search}&lang=${language}&country=${country}&max=10&apikey=${apiKey}`;
  
 const GetNewsQuery = async()=> {
  try
  {
    await axios
    .get(url)
    .then((response)=> {
      console.log(response?.data?.articles)
      setNewsData(response?.data?.articles)
    })
    .catch((err)=> {
      console.log(err)
    })

    
  }catch(err)
  {
    console.log(err)
  }

 };
//   useEffect(()=> { 
//     const retrieveData = JSON.parse(localStorage.getItem("newsData") || "")
//     console.log("retrieve", retrieveData)

//  }, []);


  return (
    <Container>
      <h2>NEWS AGGREGATOR KODE10X</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit architecto eaque modi iste ratione explicabo consectetur ab. Totam deserunt sapiente alias consequuntur eos error nam facilis, cupiditate quaerat molestiae?</p>
        <Hold>
        <Input 
       onChange={(e)=>{
        setSearch(e.target.value)
       }}
      
      placeholder='search for news'/>
      <Select 
      onChange={(e)=> {
        setCountry(e.target.value)
      }}
      >
       <option selected disabled>~~Select Country~~</option>
       <option value="au">Australia</option>
       <option value="br">Brazil</option>
       <option value="ca">Canada</option>
       <option value="cn">China</option>
       <option value="eg"> Egypt</option>
       <option value="fr">France</option>
       <option value="de">Germany</option>
       <option value="gr">Greece</option>
       <option value="hk">Hong Kong</option>
       <option value="in">India</option>
       <option value="ie">Ireland</option>
       <option value="il">Isreal</option>
       <option value="it">Italy</option>
       <option value="jp">Japan</option>
       <option value="nl">Netherlands</option>
       <option value="no">Norway</option>
       <option value="pk">Pakistan</option>
       <option value="pe">Peru</option>
       <option value="ph">Philippines</option>
       <option value="pt">Portugal</option>
       <option value="ro">Romania</option>
       <option value="ru">Russian Federation</option>
       <option value="sg">Singapore</option>
       <option value="es">Spain</option>
       <option value="se">Sweden</option>
       <option value="ch">Switzerland</option>
       <option value="tw">Taiwan</option>
       <option value="ua">Ukraine</option>
       <option value="gb">United Kingdom</option>
       <option value="us">United States</option>

      </Select>
      <Select
       onChange={(e)=> {
        setlanguage(e.target.value)
       }}
      >
        <option selected disabled>~~Select Language~~</option>
        <option value="ar">Arabic</option>
        <option value="zh">Chinese</option>
        <option value="nl">Dutch</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="he">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ml">Malayalam</option>
        <option value="mr">Mrathi</option>
        <option value="no">Norwegian</option>
        <option value="pt">Portugese</option>
        <option value="ro">Romania</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="sv">Swedish</option>
        <option value="ta">Tamil </option>
        <option value="te">Telegu</option>
        <option value="uk">Ukranian</option>


      </Select>
        </Hold>
      <button onClick={GetNewsQuery}>Search</button>
      <br/>
      <br/>
      <br/>
      <h3>Our different News sources</h3>
      <NewsCat>
        <NewsCard>
          BBC
        </NewsCard>
        <NewsCard>
          GOOGLE
        </NewsCard>
        <NewsCard>
          BING
        </NewsCard>
        <NewsCard>
          PUNCH
        </NewsCard>
        
      </NewsCat>
      <br/>
      <br/>
      <br/>
      <h3>Current News Headlines</h3>
      <CardHold>
        {NewsData?.map((props:PropsData, i:number)=> (
           <Card key={i}>
           <NewsImage src = {props.image} />
           <div>{props?.title}</div>
           <Link to ={`/detailed/${i}`}>
            <div>Read More</div>

           </Link>
           
            <div>Read More</div>
            <TwitterShareButton content = "news for today" 
            url={props?.url}>
             share
            </TwitterShareButton>
           
         </Card>
        ))}
        

      </CardHold>
    </Container>
  )
}

export default HomePage