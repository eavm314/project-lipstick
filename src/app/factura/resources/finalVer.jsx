"use-client"
import React from 'react'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { textValidator } from '@/helpers/validatorText';
import { getUser } from "@/app/services/axiosAPIServices";
import Dropdown from "../../address/Dropdown";
const Facturacion = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const router = useRouter;
  const onSubmit = (data) => {
    console.log(data);
    router.push('/qr')
  }

  const optionsCiudad = [
    { label: 'La Paz', value: 'LP' }
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

  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser();
      setUser(user.data);
      setCiudad(user.data.city);
      setDistrito(user.data.district);
      setZona(user.data.zone);
    };

    getUserData();
  }, [])



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user ? <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: "5em 25em", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap', backgroundColor: 'var(--sec-b-200)' }}>
        <div style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap' }}>
          <div className="titulo" style={{ fontSize: "2em", fontWeight: 'var(--weight-bold)', width: '100%', paddingBottom: "2rem" }}>
            Finalizando tu compra
          </div>
          <div className="subtitulo" style={{ fontSize: "1.75em", width: '100%', paddingBottom: "1.75rem" }}>
            Llena los siguientes datos
          </div>
          <div className="box-con-botones" style={{ padding: "2em", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.375rem' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Nombre</label>
                <input
                  data-testid='nombre-input'
                  id="nombre"
                  type="text"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. Andres Diego Morales Espinoza"
                  {...register('nombre', {
                    value: user.name,
                    required: true,
                    maxLength: 50,
                    validate: textValidator
                  })} />
                {errors.nombre?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.nombre?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>50 caracteres como máximo permitido</h1>}
                {errors.nombre?.type === 'validate' && <h1 style={{ fontWeight: 500, color: 'red' }}>No se permiten Puntos, Comas, ni guiones en este espacio</h1>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Teléfono</label>
                <input
                  data-testid='telefono-input'
                  id="telefono"
                  type="tel"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. 69420666"
                  {...register('numero', {
                    value: user.phone,
                    required: true,
                    maxLength: 8,
                    minLength: 6
                  })} />
                {errors.numero?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.numero?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>8 dígitos como máximo permitido</h1>}
                {errors.numero?.type === 'minLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>6 dígitos como mínimo permitido</h1>}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Dirección</label>
              <input
                data-testid='direccion-input'
                id="direccion"
                type="text"
                className="texto-parrafo"
                style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "44.125em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                placeholder="Ej. Alto seguencoma, 1ra meseta, C.10, Nro. 6"
                {...register('direccion', {

                  value: user.address,
                  required: true,
                  maxLength: 80
                })} />
              {errors.direccion?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
              {errors.direccion?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>80 caracteres como máximo permitido</h1>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "2em", width: "100%" }}>

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: "100%", gap: "1.75em" }}>
                <Dropdown id="ciudad" label="Ciudad" options={optionsCiudad} value={ciudad} onChange={changeCiudad} />

                <Dropdown id="distrito" label="Distrito" options={distritos} value={distrito} onChange={changeDistrito} />

                <Dropdown id="zona" label="Zona" options={zonas} value={zona} onChange={changeZona} />

              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.375rem' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>NIT</label>
                <input
                  data-testid='nit-input'
                  id="nit"
                  type="tel"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. 6733784"
                  {...register('nit', {
                    required: true,
                    maxLength: 20,
                    minLength: 7
                  })} />
                {errors.nit?.type === 'required' && <h1 data-testid="name_not_null" style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.nit?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>20 caracteres como máximo permitido</h1>}
                {errors.nit?.type === 'minLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>7 caracteres como mínimo permitido</h1>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Razón Social</label>
                <input
                  data-testid='razonSocial-input'
                  id="razonSocial"
                  type="text"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. Juan Perez de la Riva"
                  {...register('razonSocial', {
                    required: true,
                    maxLength: 30
                  })} />
                {errors.razonSocial?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.razonSocial?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>30 caracteres como máximo permitido</h1>}
              </div>
            </div>

            <input className="boton-primario w-188 my-2" style={{ backgroundColor: '#262626', fontSize: '1.25em' }}
              type="submit"
              value="Continuar"
              id="submit"
            />

          </div>
        </div>
      </div> : <></>}
    </form>
  )
};

export default Facturacion;