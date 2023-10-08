import React from 'react'
import { Button } from 'react-bootstrap'

const pra = [
    {
        name:'Vata Prakriti'
    },
    {
        name:'Pitta Prakriti'
    },
    {
        name:'Kapha Prakriti'
    },
    {
        name:'Vata Pitta Prakriti'
    },
    {
        name:'Pitta Kapha Prakriti'
    },
    {
        name:'Kapha Vata Prakriti'
    },
    {
        name:'Tridosha Prakriti'
    }
]

const BodyUI = () => {
  return (
    <>
        <div>
            <div style={{paddingTop:'100px', marginTop:'40px'}} className='text-center'>
                <h1 style={{color:'#fff'}}>Welcome to Prakriti Analysis</h1>
            </div>
            <div style={{marginTop:'50px'}} className='text-center'>
                <p className='lead' style={{color:'#fff'}}>Prakriti is an inherent nature of an individual determined at the time of your birth, which can not be changed during your lifetime. Ayurveda broadly classifies human nature in two types – Mental and Physical Nature.</p>
            </div>
            <div style={{marginTop:'100px', marginBottom:'160px'}} className='text-center d-flex justify-content-center'>
                <div style={{borderRadius:'25px',border:'2px solid black' , marginLeft:'30px', color:'#fff', backgroundColor:'#002244', width:'300px', height:'300px'}}>
                <h4 style={{margin:'35px', padding:'20px'}}>I want to find which Prakriti am i belongs to</h4>
                <Button variant="secondary" style={{width:'150px'}} href='https://huggingface.co/spaces/Rohankumar31/Prakruti_LLM'> Check It</Button>
                </div>

                <div style={{borderRadius:'25px',border:'2px solid black' , marginLeft:'30px', color:'#fff', backgroundColor:'#002244', width:'300px', height:'300px'}}>
                <h4 style={{margin:'35px', padding:'20px'}}>I need suggestions about Prakriti</h4>
                <Button variant="secondary" style={{width:'150px'}} href='https://huggingface.co/spaces/Rohankumar31/Prakruti_ANN'> Check It</Button>
                </div>
                
                
            </div>

            <div className='text-center'>
                <h1 style={{color:'#0047AB', marginBottom:'35px'}}>There are 7 types of Prakriti</h1>
                <ul>
                    {pra.map((i) => {
                        return (
                        <li className='lead' style={{color:'#fff', listStyle:'none', fontSize:'30px'}}>{i.name}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='text-center' style={{marginTop:'50px', marginBottom:'50px'}}>
                <h1 style={{color:'#0047AB', marginBottom:'35px'}}>Description</h1>
                    <p className='lead' style={{fontSize:'20px', color:'#fff'}}>Each Prakriti has different characteristic features. The concept of Prakriti makes Ayurveda unique from other medical systems. Selection of treatment, medicine is different for each individual depending upon their Prakriti. Ayurveda also suggest about food which is conductive, foods which need to
be avoided according to Prakriti. Assessment of Prakriti analysis will not only help in understanding the physical and mental constitution of patient, but also plays a vital role in prognosis, diagnosis, treatment and prevention of many diseases.</p>
            </div>
            <div style={{backgroundColor:'#002244', padding:'5px'}} className='text-center'>
                <p style={{color:'#fff'}}>Copyrights@2023. All rights reserved.</p>
            </div>
        </div>
    </>
  )
}

export default BodyUI