import axios from 'axios';
import React, { useState } from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction:column;
     

     h2{
        font-size:40px;
        font-weight:bold;
     }

     p{
        font-size:20px;
        font-weight:bold;
        margin-left:30px;
        
     }

     button{
        height: 40px;
        width: 140px;
        border-radius:5px;
        
     }
`
const Input = styled.input`
      height: 40px;
      width: 400px;
      margin-right:20px;
`
const Hold = styled.div`
      
`
const Card = styled.div``
const HeadImage = styled.div``
interface HeadProps{
    image:string;
    title:string;
    category:string;
}


const HeadlinePage :React.FC= () => {
    
    const [Headline, setHeadline] = useState([])
    // const [category, setcategory] =useState("")
    const apiKey = "402e8b72c6f14d07d8169efa6a688e2c"
    const category = 'general';
    const url =  `https://gnews.io/api/v4/top-headlines?category= ${category}&lang=en&country=us&max=10&apikey= ${ apiKey}`;
       
    const GetHeadlines = async()=> {
        
        try
        {
           await axios
           .get(url)
           .then((response)=> {
            console.log(response?.data?.articles)
            
            setHeadline(response?.data?.articles)
           })
           .catch((err)=> {
            console.log(err)
           })

        }catch(err)
        {
          console.log(err)
        }
    }
  return (
    <Container>
       
        <Hold>
       
        <p>Latest and trending news update</p>
          <Input 
         onChange={(e)=> {
            setcategory(e.target.value)
        }}
       placeholder='search category'
        />  

        <button onClick={GetHeadlines}>Search</button>
        <h2>TOP HEADLINES NEWS</h2>

        
       </Hold> 
       <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
             {Headline?.map((props:HeadProps, i)=> (
                <Card key={i}>
                    <HeadImage src={props.image}/>
                    <div>{props?.title}</div>

                    

                </Card>

            ))} 

        

    </Container>
  )
}

export default HeadlinePage