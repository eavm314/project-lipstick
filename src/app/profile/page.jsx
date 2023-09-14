"use client"
import Link from "next/link";
import HistorialPucharses from "./resources/historialPucharses";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "../services/axiosAPIServices";

const infoData = {
  name: "Dylan Jitton",
  image: 'https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg',
  email: "dylanjitton2020@gmail.com",
  birthDay: 11,
  birthMonth: "Septiembre",
  birthYear: 2001,
  phone: 72234554,
  address: "LP-Sur, Z. Sur, Los Rosales, Achumani, Calle 5 Nro. 2475",
  password: "**********",
  //TODO: Add for multiples pucharses, with multiple codes and a bunch of
  pucharsesHistorial:[
    {
      code: 5998,
      pucharses: [
        { nameItem: "Labial Sabor Chocolate Humectante Antigrasa Esika Premium", cant: 20, precio: 2000 },
        { nameItem: "Palette Pinky Dinky Sin Glitter Edicion de Diatio", cant: 30, precio: 6000 },
      ]
    },
    {
      code: 7977,
      pucharses: [
        { nameItem: "Labial Sabor Chocolate Humectante Antigrasa Esika Premium", cant: 20, precio: 2000 },
        { nameItem: "Palette Pinky Dinky Sin Glitter Edicion de Diatio", cant: 50, precio: 6000 },
      ]
    },
    {
      code: 5879,
      pucharses: [
        { nameItem: "Labial Sabor Chocolate Humectante Antigrasa Esika Premium", cant: 20, precio: 2000 },
        { nameItem: "Palette Pinky Dinky Sin Glitter Edicion de Diatio", cant: 50, precio: 6000 },
        { nameItem: "Labial Sabor Chocolate Humectante Antigrasa Esika Premium", cant: 20, precio: 2000 },
        { nameItem: "Palette Pinky Dinky Sin Glitter Edicion de Diatio", cant: 30, precio: 6000 },
      ]
    }
  ]
    
}


const infoPerfil = () => {
  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleSignOut = async () => {

    await supabase.auth.signOut();
    router.push('/login');
  }

  const store = () =>{
    router.push('/tienda');
  }

  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser();
      setUser(user.data)
    };

    getUserData();
  },[])

  return (
    <div style={{ backgroundColor: '#f9f8f7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

      <div style={{ width: '45.625em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#000' }}>
        <h1 className="titulo" style={{ fontSize: '2.25em', marginBottom: '1.5rem', marginTop: '2.5625rem', fontWeight: 'bold' }}>Tu perfil</h1>
        <img style={{ width: 91, height: 91, backgroundColor: '#d9d9d9', borderRadius: 100, marginBottom: '1.3125em' }} src={user? user.image : infoData.image} alt={infoData.image} />
        <h1 className="texto-normal-semibold" style={{ fontSize: '1.75em', marginBottom: '1.25rem' }}>{user? user.name : 'User'}</h1>
        <h1 className="texto-parrafo" style={{ fontSize: '1.125em', marginBottom: '1.375rem' }}>{user? user.email : 'ejemplo@gmail.com'}</h1>
      </div>

      <div style={{ width: '45.625em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#000' }}>

        <div style={{ width: '45.625em', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <h1 className="titulo" style={{ fontSize: '1.5em', marginBottom: '0.5rem', marginTop: '1rem', marginLeft: '0.375em', fontWeight: 'normal' }}>Datos Personales</h1>
          <div style={{ padding: '2.125em', display: 'flex', flexDirection: 'column', paddingBottom: '1em', paddingTop: '1em' }}>

            <div style={{ display: 'flex', marginBottom: '1em', width: '41.5em' }}>
              <div style={{ display: 'flex', flex: 1 }}>
                <h1 className="texto-normal-semibold" style={{ fontSize: '1em' }}>Teléfono</h1>
              </div>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                <h1 className="texto-parrafo" style={{ fontSize: '1em', display: 'flex' }}>{user? user.phone : '777777'}</h1>
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '1em', width: '41.5em' }}>
              <div style={{ display: 'flex', flex: 1 }}>
                <h1 className="texto-normal-semibold" style={{ fontSize: '1em' }}>Dirección</h1>
              </div>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', paddingLeft: '13.75rem' }}>
                <h1 className="texto-parrafo" style={{ fontSize: '1em', display: 'flex', justifyContent: 'right', textAlign:"right" }}>{user? user.city+"-"+user.district+", Z."+user.zone+", "+user.address : 'LP-S, Z. S, Los Rosales, Achumani, Calle 5 Nro. 2475'}</h1>
              </div>
            </div>


          </div>
        </div>
        <div style={{ width: '45.625em', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>

          <Link
            href={"/editProfile/otros"}
            className="boton-primario w-151 " style={{ marginBottom: '1.4375rem', marginRight: '1.5rem' }}>
            Editar Perfil
          </Link>
        </div>
      </div>

      <div style={{ width: '45.625em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        <div style={{ width: '45.625em', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <h1 className="titulo" style={{ fontSize: '1.5em', marginBottom: '0.5rem', marginTop: '1rem', marginLeft: '0.375em', fontWeight: 'normal' }}>Historial de Compras</h1>
          {
            infoData.pucharsesHistorial.length!==0?
              infoData.pucharsesHistorial.map((item,index) => {
              return (
                <HistorialPucharses
                  code={item.code}
                  list={item.pucharses}
                  key={index}
                />)
              }):<div className="texto-normal w-full text-4xl py-16 px-90 text-slate-400 text-center">No se ha realizado Niguna Compra</div>
            
            }

        </div>

      </div>
      <button
        onClick={handleSignOut}
        className="boton-advertencia w-175 " style={{ marginBottom: '2.25rem', marginTop: '9.1875em' }}>
        Cerrar Sesion
      </button>
      <button
        onClick={store}
        className="boton-primario w-175 " style={{ marginBottom: '2.25rem' }}>
        Volver a Tienda
      </button>
    </div>
  )
}

export default infoPerfil