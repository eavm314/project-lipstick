"use-client"
import React from 'react'
import { appendErrors, useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { textValidator } from '@/data/validatorText';

const Facturacion = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const router = useRouter()
  const onSubmit = (data) => {
    console.log(data);
    router.push('/address')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: "5em 25em", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap', backgroundColor: 'var(--sec-b-200)' }}>
        <div style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap' }}>
          <div className="titulo" style={{ fontSize: "2em", fontWeight: 'var(--weight-bold)', width: '100%', paddingBottom: "2rem" }}>
            Finalizando tu compra
          </div>
          <div className="subtitulo" style={{ fontSize: "1.75em", width: '100%', paddingBottom: "1.75rem" }}>
            Pago del pedido
          </div>
          <div className="box-con-botones" style={{ padding: "2em", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.375rem' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Nombre</label>
                <input
                  type="text"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. Andres Diego Morales Espinoza"
                  {...register('nombre', {
                    required: true,
                    maxLength: 50,
                    validate:textValidator
                  })} />
                {errors.nombre?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.nombre?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>50 caracteres como máximo permitido</h1>}
                {errors.nombre?.type === 'validate' && <h1 style={{ fontWeight: 500, color: 'red' }}>No se permiten Puntos, Comas, ni guiones en este espacio</h1>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Número telefónico</label>
                <input
                  type="tel"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. 69420666"
                  {...register('numero', {
                    required: true,
                    maxLength: 8
                  })} />
                {errors.numero?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.numero?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>8 dígitos como máximo permitido</h1>}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Dirección</label>
              <input
                type="text"
                className="texto-parrafo"
                style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "44.125em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                placeholder="Ej. Alto seguencoma, 1ra meseta, C.10, Nro. 6"
                {...register('direccion', {
                  required: true,
                  maxLength: 80
                })} />
              {errors.direccion?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
              {errors.direccion?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>80 caracteres como máximo permitido</h1>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.375rem' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>NIT</label>
                <input
                  type="tel"
                  className="texto-parrafo"
                  style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "21.375em", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }}
                  placeholder="Ej. 6733784"
                  {...register('nit', {
                    required: true,
                    maxLength: 20
                  })} />
                {errors.nit?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                {errors.nit?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>20 caracteres como máximo permitido</h1>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="texto-normal font-medium" style={{ fontSize: "1.25em", marginBottom: '1.25rem' }}>Razón Social</label>
                <input
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

            {/*
            <Link className="boton-primario" style={{padding:'1rem',paddingLeft:'2.5rem',paddingRight:'2.5rem',fontSize:'1.25em'}} href={"/address"}>
              <input type="submit" value="Continuar" />
                </Link>
                */}

            
            <input className="boton-primario w-188 my-2" style={{backgroundColor:'#262626',fontSize:'1.25em'}}
              type="submit"
              value="Continuar"
            />
              
          </div>
        </div>
      </div>
    </form>
  )
};

export default Facturacion;