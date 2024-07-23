import React from 'react'
import './stylettwo.css'

const flipCard = () => {
  return (
    <section>
    <div class="flex gap-4 w-screen">
        <div class="col-md-4 col-sm-6 col-xs-12 w-1/3">
            <div class="card">
                <div class="cover item-a">
                    <h1>Little Bonsai</h1>
                    <span class="price">$79</span>
                    <div class="card-back overflow-hidden bgri">
                        <a href="#" class="absolute">Add to cart</a>
                        <img src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 w-1/3">
            <div class="card">
                <div class="cover item-b">
                    <h1>Tropical Leaf</h1>
                    <span class="price">$35</span>
                    <div class="card-back">
                        <a href="#">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 w-1/3">
            <div class="card">
                <div class="cover item-c">
                    <h1>Marijuana Chill</h1>
                    <span class="price">$155</span>
                    <div class="card-back">
                        <a href="#">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>  )
}

export default flipCard