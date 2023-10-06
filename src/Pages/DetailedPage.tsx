import React,{useState, useEffect} from 'react'
import styled from '@emotion/styled'
import {useParams} from "react-router-dom"

const Container = styled.div``
const Text = styled.div``
const Card = styled.div``


const DetailedPage :React.FC= () => {

    const {i} = useParams()
    const[detailedData, setdetailedData] = useState()

    // useEffect(()=> {
    //     const retrieveData = JSON.parse(localStorage.getItem("newsData") || "");
    //     console.log("retrieve", retrieveData[Number(i)]);
    //     setdetailedData(retrieveData[Number(i)])
    // }, [])

  return (
    <Container>
        <Text>
            {detailedData?.title}
        </Text>
        <Card>
            <img src = {detailedData?.image}/>

        </Card>

    </Container>
  )
}

export default DetailedPage