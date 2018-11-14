<template>
  <card>
    <h4 slot="header" class="card-title">basic details</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="text"
                    label="id"
                  
                    placeholder=""
                    v-model="user.id">
          </fg-input>
        </div>
        <div class="col-md-3">
          <fg-input type="text"
                    label="carrier"

                    placeholder=""
                    v-model="user.carrier">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="date"
                    placeholder=""
                    v-model="user.date">
          </fg-input>
        </div>
      </div>
 




      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="product details"
                    placeholder=""
                    v-model="user.productdetails">
          </fg-input>
        </div>

         <div class="col-md-4">
          <fg-input type="Text"
                    label="discharging details"
                    placeholder=""
                    v-model="user.dischargingdetails">
          </fg-input>
        </div>
          <div class="col-md-4">
          <fg-input type="Text"
                    label="notify details"
                    placeholder=""
                    v-model="user.notifydetails">
          </fg-input>
        </div>
          <div class="col-md-4">
          <fg-input type="Text"
                    label="recipient details"
                    placeholder=""
                    v-model="user.recipientdetails">
          </fg-input>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="save">
       save
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
          Date: '',
          purchaseorderid: '',
          term: '',
          Name: '',
         address: '',
          address: '',
          description: '',
          quantity: '',
         unitprice: '',
          grossweight: '',
          purchaseorderreference:''
        }
      }
    },
    methods: {
  save () {
      var app=this;
     app.$router.push('/admin/issuse')
      }
    }
  }

</script>
<style>

</style>
