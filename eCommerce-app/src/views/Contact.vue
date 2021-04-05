<template>
  <div class="container">
    <h1 class="mt-5">This is a contact page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, maiores autem ipsam nemo corrupti architecto? Quas, nemo! Itaque deleniti distinctio, reprehenderit laboriosam, tenetur cupiditate maxime dicta architecto labore, vitae est?</p>
    
    <form class="mt-5 border">
  <!-- Name input -->
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Name</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="form-control" />
    <label class="form-label" for="form4Example2">Email address</label>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form4Example4"
      checked
    />
    <label class="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
</form>



  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>
