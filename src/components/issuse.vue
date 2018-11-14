<template>
  <div class="content">


       <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">letter of credit</h4>
            
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
     <!-- <button type="submit" class="btn btn-info btn-fill float-right" @click="biladin">bill of lading</button> -->

     <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title" @click="loc">purchase order</h4>
            
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
    </div> -->
    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">transaction</h4>
            
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table3.columns"
                       :data="table3.data">
              </l-table>
            </div>
          </card>

        </div>

        
      </div>
    </div> -->

   
  </div>
  
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  const tableColumns = ['Id', 'buyer', 'seller', 'quantity', 'unitprice','description','action']
  const tableData = [{
    id: 1,
    buyer: 'xxxxx',
    seller: 'asdfghj',
    quantity: '123456',
    unitprice: '2133123',
    description:'asddds',
    action:'apply for loc'
  },
 ]
  const tableColumns2 = ['Id', 'buyer', 'seller', 'amount','description','status','action']
  const tableData2 = [{
    id: 'rfgeg',
    buyer: 'gsadjh',
    seller: 'rtt',
    amount: '2133',
  
    description:'rferfrf',
    status:'shipped',
    action:'bill of lading'
  },
 ]
 const tableColumns3 = ['hash', 'input', 'output', 'signers']
  const tableData3 = [{
    hash: '',
    input: '',
    output: '',
    signers: '',
   
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
        table3: {
          columns: [...tableColumns3],
          data: [...tableData3]
        }
      }
    },
    methods:{
        loc(){
            var app=this;
           app.$router.push('/admin/application')
        },
        biladin(){
            var app= this;
            this.$router.push('/admin/bill')
        }
    }
  }
</script>
<style>
</style>
