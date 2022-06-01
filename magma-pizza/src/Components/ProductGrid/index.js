import React from 'react';

function ProductGrid() {
  return <div>
      <div class = "grid grid-cols-3 gap-4 w-3/4 self-end">
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <img class = "w-48" src={require('./pan.jpg')} alt="pan" />
                    </div>
                    <div class = "text-center">
                        <p>nombre</p>
                        <p>descripcion</p>
                        <p>precio</p>
                        <p>boton de agregar al carro</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <img class = "w-48" src={require('./pan.jpg')} alt="pan" />
                    </div>
                    <div class = "text-center">
                        <p>nombre</p>
                        <p>descripcion</p>
                        <p>precio</p>
                        <p>boton de agregar al carro</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <img class = "w-48" src={require('./pan.jpg')} alt="pan" />
                    </div>
                    <div class = "text-center">
                        <p>nombre</p>
                        <p>descripcion</p>
                        <p>precio</p>
                        <p>boton de agregar al carro</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <img class = "w-48" src={require('./pan.jpg')} alt="pan" />
                    </div>
                    <div class = "text-center">
                        <p>nombre</p>
                        <p>descripcion</p>
                        <p>precio</p>
                        <p>boton de agregar al carro</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <img class = "w-48" src={require('./pan.jpg')} alt="pan" />
                    </div>
                    <div class = "text-center">
                        <p>nombre</p>
                        <p>descripcion</p>
                        <p>precio</p>
                        <p>boton de agregar al carro</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-center">
                        <img class = "w-48" src={require('./pan.jpg')} alt="pan" />
                    </div>
                    <div class = "text-center">
                        <p>nombre</p>
                        <p>descripcion</p>
                        <p>precio</p>
                        <p>boton de agregar al carro</p>
                    </div>
                </div>
        </div>
    </div>;
}

export default ProductGrid;