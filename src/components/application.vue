<template>
  <card>
    <h4 slot="header" class="card-title">letter of application</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="issuing bank"
                 
                    placeholder=""
                    v-model="user.issuingbank">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="advisary bank"
                    placeholder=""
                    v-model="user.advisarybank">
          </fg-input>
        </div>
      
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="seller"
                    placeholder=""
                    v-model="user.seller">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="buyer"
                    placeholder=""
                    v-model="user.buyer">
          </fg-input>
        </div>
      </div>


     
           <h4 slot="header" class="card-title">Identification</h4>
            <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="id"
                    placeholder=""
                    v-model="user.id">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="letter of credit type"
                    placeholder=""
                    v-model="user.letter">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="number"
                    label="Amount"
                    placeholder=""
                    v-model="user.amount">
          </fg-input>
        </div>
      </div>
    <h4 slot="header" class="card-title">Discharging details</h4>
       <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="address"
                    placeholder=""
                    v-model="user.address">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="city"
                    placeholder=""
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="country"
                    placeholder=""
                    v-model="user.country">
          </fg-input>
        </div>
      </div>
      <h4 slot="header" class="card-title">product</h4>
       <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="decription"
                    placeholder=""
                    v-model="user.address">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="quantity"
                    placeholder=""
                    v-model="user.city">
          </fg-input>
        </div>
         <div class="col-md-4">
          <fg-input type="text"
                    label="weight"
                    placeholder=""
                    v-model="user.country">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="unit of weight"
                    placeholder=""
                    v-model="user.country">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="unit of price"
                    placeholder=""
                    v-model="user.country">
          </fg-input>
        </div>
      </div>
      <h4 slot="header" class="card-title">presentation</h4>
       <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="country"
                    placeholder=""
                    v-model="user.address">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="city"
                    placeholder=""
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="state"
                    placeholder=""
                    v-model="user.country">
          </fg-input>
        </div>
           <div class="col-md-4">
          <fg-input type="text"
                    label="last shippment date"
                    placeholder=""
                    v-model="user.country">
          </fg-input>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="apply">
         Apply
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          company: '',
          username: 'michael23',
          email: '',
          firstName: 'Mike',
          lastName: 'Andrew',
         
          postalCode: '',
          aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        }
      }
    },
    methods: {
    apply () {
        var app=this;
        this.$router.push('/admin/goods')
    }
    }
  }

</script>
<style>

</style>
