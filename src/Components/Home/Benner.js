import React from 'react';

const Benner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://as2.ftcdn.net/v2/jpg/03/64/91/07/1000_F_364910752_7QAtpgNCSoqFTIxPzvlO26fT6ao9Fp5C.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Zahan's Kitchen!</h1>
      <p className="py-6">Provide the best food and service on your events.</p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>

{/* about us section */}
<div class="mx-auto max-w-5xl px-4 py-8">
  <section class="rounded-lg bg-gray-100 p-8">
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <img
        alt="weMan"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdU9GX6uyxR-ntGdEBD8eXqAmXBK2QkcmZ92ug8PqiAjUIyWpFZpJw1l6Bur8Db-Pe70I&usqp=CAU"
        class="aspect-square w-full rounded-lg object-cover"
      />

      <blockquote class="sm:col-span-2">
        <p class="text-xl font-medium sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
          autem alias.
        </p>

        <cite class="mt-8 inline-flex items-center not-italic">
          <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
          <p class="text-sm uppercase text-gray-500 sm:ml-3">
            <strong>Justin Harrison</strong>, Beatle Inc.
          </p>
        </cite>
      </blockquote>
    </div>
  </section>
</div>

        </div>
    );
};

export default Benner;