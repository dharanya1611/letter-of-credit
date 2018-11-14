<template>
  <div class="content">


       <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">letter of credit application</h4>
            
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
    </div> -->
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
    <div class="container-fluid">
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
    </div>

   
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
  const tableColumns2 = [ 'buyer', 'seller', 'amount','description','action']
  const tableData2 = [{
    id: 'fsf',
    buyer: 'dsfsdff',
    seller: 'dfggf',
    amount: '2313',
  
    description:'xcvcv',
    action:'approve'
    
  },
 ]
 const tableColumns3 = ['hash', 'input', 'output', 'signers']
  const tableData3 = [{
    hash: '233',
    input: 'xxx',
    output: 'yyyy',
    signers: 'sdfs',
   
  },
  {
     hash: '123',
    input: 'yyy',
    output: 'xxx',
    signers: 'sdf',
  },
   {
     hash: '123',
    input: 'yyy',
    output: 'letter of credit issused',
    signers: 'sdf',
  }
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
        // loc(){
        //     var app=this;
        //    app.$router.push('/admin/application')
        // }
    }
  }
</script>
<style>
</style>
