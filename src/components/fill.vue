<template>
  <card>
    <h4 slot="header" class="card-title">basic details</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="number"
                    label="Date"
                  
                    placeholder=""
                    v-model="user.Date">
          </fg-input>
        </div>
        <div class="col-md-3">
          <fg-input type="text"
                    label="purchase order Id"

                    placeholder=""
                    v-model="user.purchaseorderid">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Term"
                    placeholder=""
                    v-model="user.term">
          </fg-input>
        </div>
      </div>
  <h4 slot="header" class="card-title">Seller Details</h4>
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Name"
                    placeholder=""
                    v-model="user.Name">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Address"
                    placeholder=""
                    v-model="user.address">
          </fg-input>
        </div>
      </div>
 <h4 slot="header" class="card-title">Buyer Details</h4>
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Name"
                    placeholder=""
                    v-model="user.Name">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Address"
                    placeholder=""
                    v-model="user.address">
          </fg-input>
        </div>
      </div>

    <h4 slot="header" class="card-title">Purchased Goods</h4>
      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Description"
                    placeholder=""
                    v-model="user.description">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Quantity"
                    placeholder=""
                    v-model="user.quantity">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Unit Price"
                    placeholder=""
                    v-model="user.unitprice">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="number"
                    label="Gross Weight"
                    placeholder=""
                    v-model="user.grossweight">
          </fg-input>
        </div>

         <div class="col-md-4">
          <fg-input type="Text"
                    label="Purchase Order reference"
                    placeholder=""
                    v-model="user.purchaseorderreference">
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
       app.$router.push('/admin/product')
      }
    }
  }

</script>
<style>

</style>
