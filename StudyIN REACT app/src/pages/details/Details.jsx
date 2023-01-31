import React from 'react'
import './details.scss'

const Details = () => {
  return (
    <div className="map">
      <div className='noimgs'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8089841344945!2d-1.2565554839785464!3d51.754816379676534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversit%C3%A9%20d&#39;Oxford!5e0!3m2!1sfr!2sdz!4v1670024187656!5m2!1sfr!2sdz" Style={{Width:"1200" ,height:"900" ,style:"border:0;", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
       <div className='infod' >
          <div >La catégorie de l’annonce : primaire, collège, lycée .</div>
          <div >Le thème de l’annonce : maths, physique, sciences...etc.</div>
          <div >La modalité : offline ou  online </div>
          <div >Une description : Contient un texte descriptif libre </div>
          <div >Le tarif : représente le tarif horaire </div>
          <div >Les informations de contact : Contient le nom et prénom, l’adresse, l’email et le téléphone de l’annonceur.</div>
          <div >Le lieu de la formation : Décrite par la Wilaya, la Commune et l’Adresse du bien immobilier.</div>
        </div>
      </div>
     <div className='imgs'>
        <img src="https://www.uni-bremen.de/fileadmin/_processed_/6/b/csm__MG_5591_376400e1c7.jpg" alt="" />
        <img src="https://www.uni-bremen.de/fileadmin/_processed_/e/8/csm_DSC_6861_dffdc493a8.jpg" alt="" />
        <img src="https://www.uni-bremen.de/fileadmin/_processed_/e/8/csm_DSC_6861_dffdc493a8.jpg" alt="" />
        <img src="https://www.uni-bremen.de/fileadmin/_processed_/e/8/csm_DSC_6861_dffdc493a8.jpg" alt="" />
        <img src="https://www.uni-bremen.de/fileadmin/_processed_/e/8/csm_DSC_6861_dffdc493a8.jpg" alt="" />
        <img src="https://www.uni-bremen.de/fileadmin/_processed_/e/8/csm_DSC_6861_dffdc493a8.jpg" alt="" />
      </div>

    </div>
  )
}

export default Details