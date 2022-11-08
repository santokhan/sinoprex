<script setup>
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
import TopBar from "../components/header/topbar/TopBar.vue";
</script>
<script>
export default {
  data() {
    return { submit: false, ok: false };
  },
  methods: {
    handleSubmit() {
      this.submit = this.submit ? false : true;
    },
    handleOk() {
      this.ok = this.ok ? false : true;
    },
  },
};
</script>
<template>
  <TopBar />
  <div class="flex flex-col items-center">
    <iframe
      width="100%"
      height="350"
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.806472778197!2d121.5638853297342!3d29.869854576021183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d633100af46c3%3A0xe8d3f7ac599e114a!2sBusiness%20Building!5e0!3m2!1sen!2s!4v1654576976427!5m2!1sen!2s"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    >
    </iframe>
    <div
      class="flex flex-col gap-3 items-center max-w-4xl mx-auto text-center py-[5rem]"
    >
      <div class="font-semibold text-3xl xl:text-4xl uppercase text-stone-900">
        Get in touch with us & send us message today!
      </div>
      <div class="font-semibold text-stone-500">
        Sinopex delivers high quality IT consultancy services and Business IT
        support to organisation of any size. We can help lead your organization
        with advance IT strategies and creative solutions with our top-notch IT
        consultancy services.
      </div>

      <div class="text-stone-900 font-medium">
        <div>RM2207, YINZHOU BUSINESS</div>
        <div>BUILDING, 257 HUIFENGDONG ROAD,</div>
        <div>YINZHOU DISTRICT, NINGBO CITY</div>
        <div>Email:Hello@SinoPex.com</div>
        <div>Phone: (+123) 456 789 101</div>
      </div>
    </div>
  </div>

  <div
    class="pb-[5rem] flex justify-center"
    v-if="submit === true && ok === false"
  >
    <div
      class="bg-blue-100 rounded-xl flex flex-col items-center px-10 py-8 gap-4"
    >
      <div
        class="bg-indigo-500 flex justify-center items-center rounded-full h-12 w-12 xl:h-20 xl:w-20 mb-4"
      >
        <i
          class="fa fa-check text-2xl xl:text-4xl text-white"
          aria-hidden="true"
        ></i>
      </div>
      <div class="text-3xl font-semibold">Thank You</div>
      <div class="text-gray-600 font-semibold text-xl mb-2">
        Your details has been successfully submitted. Thanks!
      </div>
      <button
        class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
        @click="handleOk()"
      >
        OK
      </button>
    </div>
  </div>

  <form
    class="pb-[8rem]"
    @submit.prevent="handleSubmit()"
    v-if="submit === false"
  >
    <div
      class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-[5rem] mx-auto bg-blue-100 text-gray-900 rounded-lg shadow-lg"
    >
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div class="text-gray-700 mt-8">
            Hate forms? Send us an <span class="underline">email</span> instead.
          </div>
        </div>
        <div class="mt-8 text-center">
          <img src="../assets/contact.svg" alt="contact" />
        </div>
      </div>
      <div class="">
        <div>
          <span class="uppercase text-sm text-gray-600 font-bold"
            >Full Name</span
          >
          <input
            class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input
            class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea
            class="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="mt-8">
          <button
            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  </form>
  <div></div>
  <Footer></Footer>
</template>
