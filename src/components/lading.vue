<template>
<div>
<form-wizard title="" subtitle="" >

<tab-content title="shipper">
 <template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">shipping process</h4>
            
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table1.columns"
                       :data="table1.data">
              </l-table>
            </div>
          </card>

        </div>

        
      </div>
    </div>

  </div>
  
</template>
</tab-content>
<tab-content title="destination">
<template>
  <card>
    <h4 slot="header" class="card-title">transaction process</h4>
    <form>
      <div class="row">
           <div class="col-md-4">
          <fg-input type="text"
                    label="Name"
                    placeholder=""
                    v-model="form.name">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="purchase order Id"

                    placeholder=""
                    v-model="form.purchaseorderid">
          </fg-input>
        </div>
          <div class="col-md-4">
          <fg-input type="text"
                    label="Transaction"

                    placeholder=""
                    v-model="form.transcation">
          </fg-input>
        </div>
          <div class="col-md-4">
          <fg-input type="text"
                    label="hash"

                    placeholder=""
                    v-model="form.hash">
          </fg-input>
        </div>
          <div class="col-md-4">
          <fg-input type="text"
                    label="amount"

                    placeholder=""
                    v-model="form.amount">
          </fg-input>
        </div>
       
      </div>
 


  
     
    
         
     
      <div class="clearfix"></div>
    </form>
  </card>
</template>
</tab-content>
<tab-content title="tab3">
 <template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Transaction details</h4>
            
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table2.columns"
                       :data="table2.data">
              </l-table>
            </div>
          </card>

        </div>

        
      </div>
    </div>

  </div>
  
</template>
</tab-content>



</form-wizard>

</div>


</template>


<script>

import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  const tableColumns = ['Id', 'buyer', 'seller', 'amount','description','status','action']
  const tableData = [{
    id: 1,
    buyer: 'xxxxx',
    seller: '12bx9217',
    
    amount: '21344324',
    description:'sfdfs',
    status:'view',
    action:'dewfef'
  },
 ]
 const tableColumns2 = ['hash', 'input', 'output', 'parties']
  const tableData2 = [{
    hash: 1,
    input: 'xsddxxxx',
    output: 'sadds',
    parties: 'sellerbank',
    amount: '21344324'
  },
  {
    hash: 2,
    input: 'xsddxxxx',
    output: 'asdd',
    parties: 'buyer bank',
    amount: '21344324'
  },
  {
    hash: 3,
    input: 'xsddxxxx',
    output: 'ads',
    parties: 'buyer',
    amount: '21344324'
  },
 ]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns2],
          data: [...tableData2]
        },
         form: {
          name: '',
          purchaseorderid: '',
         transaction:'',
         amount:'',
         hash:''
        },
      }
    }
  }
</script>
<style>





</style>