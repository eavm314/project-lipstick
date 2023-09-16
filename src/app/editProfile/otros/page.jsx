"use client"
import React from "react";
import { useState, useEffect } from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import Dropdown from '../../address/Dropdown'
import Link from "next/link";
import { updateUser, getUser } from "@/app/services/axiosAPIServices";
import {  useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { textValidator } from "@/data/validatorText";

const FinCompraPage = () => {

  const optionsCiudad = [
    { label: 'La Paz', value: 'LP' },
  ];
  const zonasLaPaz = [
    { label: 'Sur', value: 'S' },
    { label: 'Centro', value: 'C' },
    { label: 'Miraflores', value: 'M' },
    { label: 'Villa Copacabana', value: 'VC' },
    { label: 'San Pedro', value: 'SP' }
  ]
  const distritosLaPaz = [
    { label: 'Sur', value: 'S' },
    { label: 'San Antonio', value: 'SA' },
    { label: 'Periferica', value: 'P' },
    { label: 'Max Paredes', value: 'MP' },
    { label: 'Cotahuma', value: 'C' }
  ]
  const [ciudad, setCiudad] = useState(null);
  const [zonas] = useState(zonasLaPaz);
  const [zona, setZona] = useState(null);
  const [distritos] = useState(distritosLaPaz);
  const [distrito, setDistrito] = useState(null)

  const changeCiudad = (event) => {
    setCiudad(event.target.value);
  };
  const changeZona = (event) => {
    setZona(event.target.value);
  };
  const changeDistrito = (event) => {
    setDistrito(event.target.value);
  };

  const { register, formState: { errors }, handleSubmit} = useForm();

  const router = useRouter()
  const onSubmit = (data) => {
    const updatedUser ={
      name: data.updateNombre+" "+data.updateApellido,
      address: data.updateDireccion,
      phone: data.updateTelefono,
      city: ciudad,
      district: distrito,
      zone: zona
    }
    console.log(updatedUser)
    const updateUserData = async () => {
      const user = await updateUser(updatedUser);
      console.log(user);
    }
    updateUserData();
    router.push('/profile')
  };

  const [ setUser] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser();
      setUser(user.data)
      if(user.data.city===null && user.data.zone===null && user.data.district){
        setCiudad('LP');
        setZona('S');
        setDistrito('S')
      } else{
        setCiudad(user.data.city);
        setZona(user.data.zone);
        setDistrito(user.data.district)
      }
      
    };

    getUserData();
  },[])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full items-center justify-center text-center px-56 py-12 flex flex-col" style={{ backgroundColor: "var(--primary--100)" }}>
        <div className="titulo text-left w-full" style={{ fontSize: "2em", paddingBottom: "1rem" }}>Editar Datos de Perfil</div>
        <div className="subtitulo text-left w-full" style={{ fontSize: "1.75em", paddingBottom: "2rem" }}>Ingrese los nuevos datos</div>
        <div className="flex items-center justify-center px-5 py-6 flex-col gap-5" style={{ borderWidth: "1px", borderColor: "black", maxWidth: "47.5em", minWidth: "40em", backgroundColor: "var(--primary--100)" }}>
          <div className="flex flex-row w-full gap-4">
            <div className="flex" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
              <label className="texto-normal" style={{ fontSize: "1.25em" }} >Nombre</label>
              <input
                type="text"
                className="texto-parrafo"
                style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                placeholder="Dylan"
                {...register('updateNombre', {
                  required: true,
                  maxLength: 50,
                  validate: textValidator
                })} />
              {errors.updateNombre?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
              {errors.updateNombre?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>50 caracteres como máximo permitido</h1>}
              {errors.updateNombre?.type === 'validate' && <h1 style={{ fontWeight: 500, color: 'red' }}>No se permiten Puntos, Comas, ni guiones en este espacio</h1>}
            </div>
            <div className="flex" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
              <label className="texto-normal" style={{ fontSize: "1.25em" }} >Apellido</label>
              <input
                type="text"
                className="texto-parrafo"
                style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                placeholder="Jitton"
                {...register('updateApellido', {
                  required: true,
                  maxLength: 50,
                  validate: textValidator
                })} />
              {errors.updateApellido?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
              {errors.updateApellido?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>50 caracteres como máximo permitido</h1>}
              {errors.updateApellido?.type === 'validate' && <h1 style={{ fontWeight: 500, color: 'red' }}>No se permiten Puntos, Comas, ni guiones en este espacio</h1>}
            </div>
          </div>
          <div className="flex" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
            <label className="texto-normal" style={{ fontSize: "1.25em" }}>Dirección</label>
            <input
              type="text"
              className="texto-parrafo"
              style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
              placeholder="Av. Villarroel Calle 8, Edificio 'Las Rosas', Piso 6, Nro.612"
              {...register('updateDireccion', {
                required: true,
                maxLength: 80
              })} />
            {errors.updateDireccion?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
            {errors.updateDireccion?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>80 caracteres como máximo permitido</h1>}
          </div>
          {/*grid style seleccionar*/}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "2em", width: "100%" }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "50%", gap: "1.75em" }}>
              {ciudad? <Dropdown label="Ciudad" options={optionsCiudad} value={ciudad} onChange={changeCiudad} />: <></>}

              {distrito? <Dropdown label="Distrito" options={distritos} value={distrito} onChange={changeDistrito} />: <></>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "50%", gap: "1.75em" }}>

              {zona? <Dropdown label="Zona" options={zonas} value={zona} onChange={changeZona} /> : <></>}

              <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                <label className="texto-normal" style={{ fontSize: "1.25em" }} >Teléfono</label>
                <input
                  type="tel"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="76689451"
                  {...register('updateTelefono', {
                    required: true,
                    maxLength: 8,
                    minLength: 6
                  })} />
                {errors.updateTelefono?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.updateTelefono?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>8 caracteres como máximo permitido</h1>}
                {errors.updateTelefono?.type === 'minLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>6 caracteres como mínimo</h1>}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            {/*<Link className="boton-primario" href={"/profile"}>*/}
            <input className="boton-primario" style={{ backgroundColor: '#262626', fontSize: '1em' }} type="submit" value="Guardar Cambios" />
            {/*</Link>*/}
            <Link className="boton-advertencia" href={"/profile"}>
              <button>Cancelar Cambios</button>
            </Link>
          </div>

        </div>
      </div>
    </form>
  );
}

export default FinCompraPage;