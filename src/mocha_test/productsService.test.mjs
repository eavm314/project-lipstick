import { createClient } from '@supabase/supabase-js';
import { expect } from 'chai';

const NEXT_PUBLIC_SUPABASE_URL = "https://wlcwonwprftismlrkejl.supabase.co"
const NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsY3dvbndwcmZ0aXNtbHJrZWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1ODkyNTQsImV4cCI6MjAwODE2NTI1NH0.Y0DVWsZF8xCmH53A1QcPQFLIb_ihE6wVJ9F9YtbGh-A"

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

describe('Unit Test: Supabase', () => {
    const testData = {
        id: 50,
        nombre: 'Producto prueba',
        precio: 200,
        cantidad: 10,
        calificacion: 5,
        imagen: "example"
    };

    it('Debe insertar un nuevo producto en supabase', async () => {
        const { data, error } = await supabase
            .from('producto')
            .insert(testData);

        console.log(error);
        expect(error).to.be.null;
    })

    it('Verifica que el nuevo producto se encuentra en supabase', async () => {

        const { data, error } = await supabase
            .from('producto')
            .select('id, nombre, precio, cantidad, calificacion, imagen')
            .eq('id', testData.id);

        expect(error).to.be.null;

        expect(data).to.deep.equal([testData]);
    });

    it('Verifica que el producto se ha borrado de supabase', async () => {

        const { data, error } = await supabase
            .from('producto')
            .delete()
            .eq('id', testData.id)
            .select();

        expect(error).to.be.null;

        const { data: newData } = await supabase
            .from('producto')
            .select('id, nombre, precio, cantidad, calificacion, imagen')
            .eq('id', testData.id);
        
        expect(newData).to.deep.equal([]);
    });
});