<template>
  <div class="container">
    <h1 class="mt-5">This is an about page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, maiores autem ipsam nemo corrupti architecto? Quas, nemo! Itaque deleniti distinctio, reprehenderit laboriosam, tenetur cupiditate maxime dicta architecto labore, vitae est?</p>
    
    <div class="mt-5 p-3 rounded bg-info text-white">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt, exercitationem iste fugiat nostrum minima. Deleniti ullam, nostrum adipisci sint magni soluta, esse repellat alias dolor, omnis hic eligendi dicta.</h3>
    </div>
    
    <div class="mt-5 text-center">
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      <div class="position-relative mt-5 w-50 ms-5" style="width: 100%">
        <div class="progress" style="height: 1px">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
          style="width: 3rem; height: 3rem"
        >
          1
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
          style="width: 3rem; height: 3rem"
        >
          2
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
          style="width: 3rem; height: 3rem"
        >
          3
        </button>
      </div>
    </div>

    <div class="mt-5 pt-5 bg-info text-white p-3 rounded mb-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, excepturi.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
 