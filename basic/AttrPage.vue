<template>
  <div class="container">
    <ul class="attr-nav">
        <li>{{ this.ownerOfAttr}} {{this.objKey}}属性表  </li>
        <li :class="{cur:tab===1}" @click="lookObjBasicInfo" size="small"><a href="#">基本属性</a></li>
        <li :class="{cur:tab===2}" @click="lookAttr" size="small"><a href="#">扩展属性</a></li>
        <li @click="addAttrInfoVisible = true"><a href="#">添加扩展信息</a></li>
        <li @click="createObject" size="small"><a href="#">创建对象</a></li>
        <li @click="moveBtn" size="small"><a href="#">移动对象</a></li>
        <li>
          <router-link
          :to="{name: 'RelationPage', params: { key: this.idOfRelationNow, name: this.ownerOfAttr} }"
          href="javascript:"
          >
            <span class="tabNav-txt">查看关联对象</span>
          </router-link>
        </li>
        <!-- <li><el-button @click="delStringDoubleQuotes"  type="success" title="转变基本管理页乱码问题" size="small">转码</el-button></li> -->
          <el-input
            class="input-basic"
            placeholder="支持主键搜索，查看扩展属性"
            v-model="inputValue"
            @keyup.enter.native="searchLookAttr"
            size="mini"
          ></el-input>
      </ul>
    
    <!-- 添加扩展信息模态 -->
    <el-dialog title="添加扩展信息" width="80%" :visible.sync="addAttrInfoVisible">
        <div class="input-attr">
          <span style="padding:10px" title="(在此处处理的移动对象为定时移动，每天0点批量执行，您也可以点击该页面“移动对象”按钮进行实时移动操作)">添加扩展属性：</span>
          <el-input
            placeholder="属性名默认_move"
            v-model="objExtendAttr"
            style="width: 25%"
            size="small"
          ></el-input>
          <el-input
            placeholder="添加扩展对象属性值/概念"
            v-model="objExtendAttrValue"
            style="width: 25%"
            size="small"
          ></el-input>
          <el-button type="primary" @click="handleSubmit" size="small">提交</el-button>
        </div>
    </el-dialog><!-- 添加扩展信息模态end -->

    <!-- 基本属性表 -->
    <div class="obj-basic" v-show="tab===1">
      <el-table
        :data="objBasicTableData"
        stripe
        border
        style="width: 100%;"
      >
      <el-table-column
          type="index"
          label="序号"
          width="50"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="obj_name"
          label="标准名"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          label="主键"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="aka"
          label="别称"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="summary"
          label="summary"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="_info"
          label="简介"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="c_name"
          label="概念"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="cpath"
          label="概念路径"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="image"
          label="image"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="associated_num"
          label="关联数量"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="ctime"
          label="创建时间"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="mtime"
          label="修改时间"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="update_time"
          label="更新时间"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
       
      </el-table>
    </div>
    <!--将键值处理成表格可用数据-->
    <div class="obj-attr" v-show="tab===2">
      <el-table
        :data="tableData"
        stripe
        border
        height="750"
        style="width: 100%;overflow-y: scroll"
        @cell-click="editBtn"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-cloum prop="objName" lable="标准名" align="center"></el-table-cloum>
        <el-table-cloum prop="objAka" lable="别称" align="center"></el-table-cloum>
        <el-table-column prop="attrKey" width="150px" label="属性名" align="center"></el-table-column>
        <el-table-column prop="attrValue"  label="属性值" align="center">
          <template scope="scope">
            <autoarea class="white-space">{{ scope.row.attrValue }}</autoarea>
          </template>
        </el-table-column>
        <el-table-column width="80px" label="编辑" align="center">
          <template slot-scope="scope">
            <el-button 
            type="primary" 
             v-show="scope.row.attrKey !== '_category'
             && scope.row.attrKey !== 'baike_id'
             && scope.row.attrKey !== 'baike_url'
             && scope.row.attrKey !== '_hasMoved'
             "
            @click="dialogEditVisible = true" size="small">编辑</el-button>
          </template>
        </el-table-column>
        <!-- 系统默认属性没有删除，多媒体没有关联 -->
        <el-table-column width="80px" label="关联" align="center">
          <template slot-scope="scope">
            <el-button
              type="warning"
              v-show=" scope.row.attrKey !== '_img' && scope.row.attrKey != '_video' && scope.row.attrKey != '_audio' "
              @click="connectObj"
              size="small"
            >关联</el-button>
          </template>
        </el-table-column>
        <el-table-column width="80px" label="删除" align="center">
          <template slot-scope="scope">
            <el-button
              type="danger"
              v-show="scope.row.attrKey != 'info'
              && scope.row.attrKey !== '_img' 
              && scope.row.attrKey != '_video' 
              && scope.row.attrKey != '_audio'
              && scope.row.attrKey != '_hasMoved' 
              && scope.row.attrKey !== '_category' 
              && scope.row.attrKey !== '_summary' 
              && scope.row.attrKey !== 'baike_id' 
              && scope.row.attrKey !== 'baike_url' 
              "
              @click="delAttrModelVisible = true"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      
    </div>

    <!--——————————————————————————————————————————————————编辑——————————————————————————————————————————————————-->
    <div class="edit-attr">
      <el-dialog title="编辑" width="80%" :visible.sync="dialogEditVisible" center>
        <el-form :model="form">
          <el-form-item label :label-width="formLabelWidth">
            <strong>待修改属性名</strong>
            <autoarea
              contenteditable="true"
              v-model="form.inputKey"
              autofocus
              auto-complete="off"
              style="width: 80% ;margin: 10px auto"
            >{{form.inputKey}}</autoarea>
          </el-form-item>
          <el-form-item
            label
            :label-width="formLabelWidth"
            v-show="form.inputKey != '_category' && form.inputKey != '_img' && form.inputKey != '_audio' && form.inputKey != '_video' && form.inputKey != 'info' "
          >
            <strong>新修改属性名</strong>
            <el-input
              v-model="form.inputNewKey"
              autofocus
              auto-complete="off"
              v-show="form.inputKey != '_img' && form.inputKey != '_audio' && form.inputKey != '_video' && form.inputKey != 'info' "
              style="width: 80% ;margin: 10px auto"
            ></el-input>
          </el-form-item>
          <el-form-item label :label-width="formLabelWidth">
            <strong>待修改属性值</strong>
            <el-button
              @click="addRow()"
              size="small"
              v-show="form.inputKey === '_img' || form.inputKey === '_audio' || form.inputKey === '_video' && form.inputKey != 'info' "
            >新增</el-button>
            <!-- 多媒体展示成表格 -->
            <el-table
              :data="mediaValueTabledata"
              border
              style="width: 100%;height: 350px;overflow:scroll"
              @cell-dblclick="mediaTableDbEdit"
              v-show="form.inputKey === '_img' || form.inputKey === '_audio' || form.inputKey === '_video' && form.inputKey != 'info' "
            >
              <el-table-column prop="id" label="序号" type="index" align="center"></el-table-column>
              <el-table-column prop="mediaVal" label="内容" width="800px" align="center">
                <template scope="scope">
                  <el-input
                    size="small"
                    v-model="scope.row.mediaVal"
                    placeholder="请输入内容"
                    @change="handleEdit(scope.$index, scope.row)"
                  ></el-input>
                  <span>{{scope.row.date}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button size="small" @click="fixedAddAttr(scope.row,scope.$index)">保存</el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, mediaValueTabledata)"
                    size="small"
                    type="text"
                  >移除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 文本展示成字符串 -->
            <textarea
              rows="15"
              contenteditable="true"
              v-on:change="changeFunc(form.inputValue)"
              v-model="form.inputValue"
              autofocus
              auto-complete="off"
              style="width: 80% ;margin: 10px auto"
              v-show="form.inputKey != '_img' && form.inputKey != '_audio' && form.inputKey != '_video' "
            ></textarea>
          </el-form-item>
          <el-button
            type="primary"
            center
            v-show="form.inputKey != '_img' && form.inputKey != '_audio' && form.inputKey != '_video' "
            @click="fixedAttr()"
          >确 定 修 改</el-button>
        </el-form>
      </el-dialog>
    </div>
    <!--——————————————————————————————————————————————————编辑end——————————————————————————————————————————————————-->
    <!--创建对象-->
    <div class="createObject">
      <el-dialog title="创建对象" :visible.sync="dialogTableVisible">
        <el-tabs v-model="activeName2" tab-position="center" type="card" @tab-click="handleClick">
          <el-tab-pane label="一般对象" name="first">
            <div class="createFirstBox">
              <div class="createFirst">
                <el-select
                  v-model="hiddenValue"
                  filterable
                  placeholder="请选择概念"
                  style="width: 300px"
                >
                  <el-option
                    v-for="item in hiddenConceptSearch"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span style="color:red; font-size:14px; ">*</span>
              </div>
              <div class="createSecond">
                <el-input style="width: 300px" placeholder="请输入标准名" v-model="hiddenName" clearable></el-input>
                <span style="color:red; font-size:14px; ">*</span>
              </div>

              <div class="createEndBtn">
                <el-button type="info" @click="confirmCreate">确认创建</el-button>
                <el-button type="info" @click="cancelCreate">取消创建</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="数值对象" name="second">数值对象</el-tab-pane>
          <el-tab-pane label="集合对象" name="third">集合对象</el-tab-pane>
          <el-tab-pane label="地理对象" name="fourth">地理对象</el-tab-pane>
        </el-tabs>
      </el-dialog>
    </div>
    <div class="moveObj">
      <el-dialog title="移动对象" :visible.sync="dialogMoveObjVisible">
        <el-form :model="moveForm">
          <el-form-item label="移动对象主键" :label-width="formLabelWidth">
            <p>{{idOfRelationNow}}</p>
          </el-form-item>
          <el-form-item label="目标概念" :label-width="formLabelWidth">
            <el-select
              v-model="moveForm.target_concept"
              :clearable="true"
              @change="changeTargetConcept"
              filterable
              placeholder="请选择目标概念"
              default-first-option
            >
              <el-option
                v-for="item in optionsMove"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogMoveObjVisible = false">取 消</el-button>
          <el-button type="primary" @click="removeObject">确 定 移 动</el-button>
        </div>
      </el-dialog>
    </div>
    <!--点击开始匹配得出的结果-->
    <div class="match_search_value">
      <el-dialog :visible.sync="dialogMatchSearch">
        <div class="match_dialog">
          <div class="match_dialog_title">
            <span>{{resetRenderKey}}</span>:
            <el-button
              class="creat-obj-in-relation"
              style="float: right"
              @click="createObject"
              size="small"
            >创建对象</el-button>
          </div>

          <div class="match_dialog_body" id="match_dialog_body" v-html="resetRenderStr"></div>
        </div>
        <!--内层-->
        <el-dialog
          width="80%"
          :title="innerVisibleValue"
          :visible.sync="innerVisible"
          append-to-body
        >
          <el-table
            :data="innerVisibleTableData"
            style="width: 100%"
            border
            @cell-click="innerVisibleBtn"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="allType" label="所属概念" align="center"></el-table-column>
            <el-table-column prop="name" label="标准名" align="center"></el-table-column>
            <el-table-column prop="akaName" label="别称" align="center"></el-table-column>
            <el-table-column prop="key" label="主键" align="center"></el-table-column>
            <el-table-column label="查看属性" align="center" width="130px">
              <template slot-scope="scope">
                <el-popover placement="right" trigger="click">
                  <el-table :data="clickGetData" border height="500px">
                    <el-table-column width="80" property="names" label="属性" align="center"></el-table-column>
                    <el-table-column width="550" property="values" label="属性值" align="center"></el-table-column>
                  </el-table>
                  <el-button slot="reference" size="small">点击查看</el-button>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="关联" align="center" width="130px">
              <template slot-scope="{row,$index}">
                <el-button v-if="!resetRenderBtnShow[$index]" size="small">关联当前对象</el-button>

                <el-button size="success" v-if="resetRenderBtnShow[$index]">已关联</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
      </el-dialog>
    </div>

    <!--删除确认-->
    <el-dialog title="提示" :visible.sync="delAttrModelVisible" width="30%" center>
      <span>请再三确认是否删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delAttrModelVisible = false">取 消</el-button>
        <el-button type="primary" @click="delAttr">确 定 删 除</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import $ from "jquery";
import {GetSimilarData} from "../component_myself/getSomeData";

import Vue from "vue";
Vue.prototype.$qs = qs;

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your 服务器 App",
      dialogEditVisible: false,
      addAttrInfoVisible: false,
      dialogTableVisible: false,
      delAttrModelVisible: false,
      dialogMoveObjVisible: false,
      form: {
        //编辑多媒体表格
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        inputKey: "",
        inputNewKey: "",
        inputNewValue: "",
        inputValue: ""
      },
      moveForm: {
        target_concept: "" //移动到的概念
      },
      optionsMove: [], // 移动所有概念select框的选项
      isdisabled: false,
      formLabelWidth: "120px",
      itemTotal: 0,
      options: [
        {
          value: "选项1",
          label: "是"
        }
      ],
      value: "",
      objBasicTableData: [], //基本信息性表
      tableData: [], //扩展属性表
      objTableData: [], //搜索对象待关联，所以要加选框
      selectIndexArray: [], //选中行
      multipleSelection: [], //选中行
      objExtendAttr: "", //添加扩展属性名
      objExtendAttrValue: "", // 添加扩展属性值
      inputValue: "", //扩展属性输入框，仅支持主键
      ownerOfAttr: this.$route.params.name, //从基本管理页过来的对象名
      objType: this.$route.params.objType, //从基本管理页过来的概念
      currentPage: 1,
      mediaValueTabledata: [], //多媒体值表总数据
      addNewObj: "",
      idOfRelationNow: this.$route.params.key,
      objKey: "", //存储主键，保证离开页面返回依然显示这个页面数据

      activeName2: "",
      initObjectKey: "", //选中的key值
      resetRenderKey: "",
      resetRenderStr: "",
      innerVisibleValue: "",
      innerVisible: false,
      dialogMatchSearch: false,
      innerVisibleTableData: [],
      resetRenderBtnShow: [], // 存储按钮的状态
      clickGetData: [], // 点击按钮获取到属性
      hiddenConceptSearch: [], //创建对象中的select中的选框
      hiddenValue: "", //创建对象中选中的值
      hiddenName: "", // 创建对象中的标准名
      hiddenAkaName: "", // 创建对象中的别称
      tab: 1,
    };
  },
  mounted() {
    this.lookAttr();
    this.lookObjBasicInfo();
    this.defaultSelect(); // 头部第一个select选框的数据
  },
  updates() {},
  methods: {
    // 切换按钮--基础信息表  
    lookObjBasicInfo(){
      this.tab = 1
      console.log(this.conceptSearch)
      if (this.objKey.length > 0 && this.conceptSearch.length > 0) {
          let _this = this;
          this.tableData = [];
          let opt = {
            concept_name: this.conceptSearch,
            text: this.objKey
          };
          this.axios.post('/api/v1/xadmin/objects/', qs.stringify(opt), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then((res) => {
            if (res['data']['msg'] == 'success' || res['data']['code'] == 1) {
              
              let resultObj = res['data']['resultObj'];
              let getData = resultObj['data'];
              let tableData = getData.map((val) => {
                let resetAka = val['aka'] ? val['aka'] : "";
                let resultOpt = {
                  associated_num: val['associated_num'],
                  name: val['name'],
                  obj_name: val['obj_name'],
                  aka: resetAka,
                  c_name: val['c_name'],
                  image: val['image'],
                  audio: val['audio'],
                  video: val['video'],
                  ctime: val['ctime'],
                  mtime: val['mtime'],
                  update_time: val['update_time'],
                  extendType: '',
                  concat1: ''
                }
                return resultOpt
              });
              //  对象名的  合并显示信息
              let keepAllName = tableData.map((val) => {
                return val['name']
              });
              _this.axios.all(keepAllName.map((keyName) => {
                let sendOpt = {
                  text: keyName, //查询文本
                  maxWordWidth: 50, //最大匹配长度，
                };
                return _this.axios.post('/api/v1/xadmin/objects/search/', qs.stringify(sendOpt), {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                })
              })).then((resArr) => {
                let keepSimilarData = resArr.map((response) => {
                  if (response['data']['message'] == 'success' || response['data']['status'] == '1') {
                    return response['data']['resultObj']
                  }
                });
                _this.objBasicTableData = tableData
              })

            } else {
              this.$message({
                showClose: true,
                message: res['data']['msg'],
                type: 'error'
              });
            }
          })
        } else {
          this.$message({
            showClose: true,
            message: "概念或者主键不能为空",
            type: 'warning'
          });
        }
    },
    //转码
    delStringDoubleQuotes(){
      let _this = this
      let attrTableData = this.tableData
      attrTableData.forEach(function(ele){
        if(ele.attrKey == 'info'){
            ele.attrKey = '_info'
          }
        axios
        .post(
          "/api/v1/xadmin/object/property/",
          qs.stringify({
            obj_key: _this.objKey, //该页对象的主键
            key: ele.attrKey,
            value:ele.attrValue
          })
        )
        .then(function(responseObjAttr) {
          if (responseObjAttr.data.status === 1) {
            _this.$message({
              type: "success",
              message: "对象属性增加成功，检查双引号是否去除"
            });
          } else {
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象属性修改接口请求失败" + error.toString());
        });
      })
    },
    // 移动对象所需——获取所有概念
    getAllConcept() {
      let _this = this;
      axios
        .get("api/v1/xadmin/relation/topology/")
        .then(function(resCon) {
          if (resCon.data.status === 1) {
            var aConceptObj = resCon.data.resultObj;
            for (let con = 0; con < aConceptObj.length; con++) {
              let conOptionObj = {};
              (conOptionObj.value = aConceptObj[con]),
                (conOptionObj.label = aConceptObj[con]);
              _this.optionsMove.push(conOptionObj);
            }
          } else {
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象扩展属性接口请求失败" + error.toString());
        });
    },
    // 选择不同概念值
    changeTargetConcept(label) {
      this.moveForm.target_concept = label;
    },
    // 移动对象模态框
    moveBtn() {
      this.dialogMoveObjVisible = true;
      this.getAllConcept();
    },
    // 确定移动
    removeObject() {
      let _this = this;

      axios
        .post(
          "api/v3/xadmin/object/move/",
          qs.stringify({
            obj_key: _this.idOfRelationNow, //该页对象的主键
            target_concept: _this.moveForm.target_concept //
          })
        )
        .then(function(responseObjAttr) {
          if (responseObjAttr.data.status === 1) {
            _this.$message({
              type: "success",
              message: "移动成功!"
            });
            _this.dialogMoveObjVisible = false;
            _this.moveForm.target_concept = "";
          } else {
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象属性修改接口请求失败" + error.toString());
        });
    },
    // 搜索查看扩展属性
    searchLookAttr() {
      let _this = this;
      var newAttrTable = [];
      axios
        .get("/api/v1/xadmin/object/property/", {
          params: {
            obj_key: _this.inputValue //从首页传过来的标准名对象主键
          }
        })
        .then(function(resObj) {
          if (resObj.data.status === 1) {
            var oextendKeyValueObj = resObj.data.resultObj;
            let objLengthOfAttr = Object.keys(oextendKeyValueObj).length; //对象长度
            if (objLengthOfAttr > 0) {
              for (let key in oextendKeyValueObj) {
                let oInAttrTable = {
                  attrKey: key,
                  attrValue: oextendKeyValueObj[key]
                };
                newAttrTable.push(oInAttrTable);
                console.log(newAttrTable);
              }
              _this.tableData = newAttrTable;
              // _this.ownerOfAttr = _this.inputValue
            }
          } else if (resObj.data.status === 2) {
            _this.$message({
              type: "info",
              message: "未选择相应主键或者无数据,请从基本管理页载入"
            });
          }
        })
        .catch(function(error) {
          console.log("对象扩展属性接口请求失败" + error.toString());
        });
    },
    /** ******************************************属性编辑*********************************************************/
    // 修改属性键值
    changeFunc(v) {
      var _this = this;
      if (_this.form.inputNewKey == "") {
        _this.form.inputNewKey = _this.form.inputKey;
      }
      // if (v != _this.form.inputValue) {
        if(_this.form.inputNewKey == "info"){
        _this.form.inputNewKey = "_info"
      }
        axios
          .post(
            "/api/v2/xadmin/object/property/edit/",
            qs.stringify({
              //获取所有扩展属性
              obj_key: _this.objKey, //该扩展属性的主键
              old_key: _this.form.inputKey, //该属性待修改属性名
              key: _this.form.inputNewKey, //该属性新修改属性名
              value: v //该属性新修改属性值
            })
          )
          .then(function(responseObjAttr) {
            if (responseObjAttr.data.status === 1) {
              _this.$message({
                type: "success",
                message: "修改成功!"
              });
              _this.dialogEditVisible = false;
              _this.lookAttr();
              _this.form.inputNewKey = "";
              _this.form.inputNewValue = "";
            } else if (responseObjAttr.data.status === 2) {
              _this.$message({
                type: "info",
                message: JSON.stringify(responseObjAttr.data.message)
              });
            } else if (responseObjAttr.data.status === 3) {
              _this.$message({
                type: "info",
                message: JSON.stringify(responseObjAttr.data.message)
              });
            }
          })
          .catch(function(error) {
            console.log("对象属性修改接口请求失败" + error.toString());
          });
      // }
    },

    //编辑--对象属性修改
    editBtn(row, column, index) {
      var _this = this;
      _this.form.inputKey = row.attrKey;
      _this.form.inputValue = row.attrValue;
      // 如果是数组，则构造多媒体表格，
      if(row.attrValue instanceof Array){
        _this.mediaValueTabledata = []
          let arrMediaValues = row.attrValue;
            for (let mvi = 0; mvi < arrMediaValues.length; mvi++) {
              var objOfMediaValue = {};
              objOfMediaValue.mediaVal = arrMediaValues[mvi];
              objOfMediaValue.id = mvi; //给拖拽创造不同的id
              _this.mediaValueTabledata.push(objOfMediaValue);
            }
      }
      
      let tableLabel = column["label"];
      if (tableLabel == "关联") {
        let matchStr = row.attrValue;
        this.resetRenderStr = "";
        this.resetRenderKey = row.attrKey;
        this.initObjectKey = row["key"];
        this.showTableTitle = row["name"];
        _this.matchType(matchStr);
      }
    },

    // 多媒体移除
    deleteRow(index, rows) {
      rows.splice(index, 1);
      this.fixedDelAttr();
    },
    // 新增
    addRow() {
      var addNewObj = { mediaVal: "" };
      this.mediaValueTabledata.push(addNewObj);
      console.log(this.mediaValueTabledata);
    },
    //编辑新增多媒体单元格数据
    mediaTableDbEdit(row, column, cell, event) {
      console.log(cell);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    //编辑属性--确定新增--保存
    fixedAddAttr(row, index) {
      var _this = this;
      let arrObjOfAddmedia = _this.mediaValueTabledata;
      let arrmed = [];
      for (var k = 0; k < arrObjOfAddmedia.length; k++) {
        let sValSdd = arrObjOfAddmedia[k].mediaVal;
        arrmed.push(sValSdd);
      }
      if(arrmed.length == 0 || arrmed[0] == ""){
       console.log(_this.form.inputKey)
        _this.delAttr()
      }else{
          _this.form.inputNewValue =  String(arrmed); 

      var objKey = this.$route.params.key;
      if (_this.form.inputNewKey == "") {
        _this.form.inputNewKey = _this.form.inputKey;
      } else if (_this.form.inputNewValue == "") {
        _this.form.inputNewValue = _this.form.inputValue;
      }
      axios
        .post(
          "/api/v2/xadmin/object/property/edit/",
          qs.stringify({
            //获取所有扩展属性
            obj_key: _this.objKey, //当前主键
            old_key: _this.form.inputKey, //待修改属性名
            key: _this.form.inputNewKey, //新修改属性名
            value: _this.form.inputNewValue //新修改属性值
          })
        )
        .then(function(responseObjAttr) {
          if (responseObjAttr.data.status === 1) {
            _this.$message({
              type: "success",
              message: "增加成功!"
            });
            // _this.dialogEditVisible = false;
            _this.lookAttr();
            _this.form.inputNewKey = "";
            _this.form.inputNewValue = "";
          } else if (responseObjAttr.data.status === 2) {
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象属性修改接口请求失败" + error.toString());
        });
      }
      
    },
    //编辑属性--移除
    fixedDelAttr() {
      var _this = this;
      //移除完之后的多媒体值
      let fixedMediaValTable = _this.mediaValueTabledata;
      let arrOneValue = []; //操作后的多媒体值表
      fixedMediaValTable.forEach(function(element){
        let fixedValue = element.mediaVal;
        arrOneValue.push(fixedValue);
      })
      // _this.form.inputNewValue = JSON.stringify(arrOneValue) ;//转化为列表传参
      
      axios
        .post(
          "/api/v2/xadmin/object/property/edit/",
          qs.stringify({
            obj_key: _this.objKey, //该扩展属性的主键
            old_key: _this.form.inputKey, //下划线属性
            key: _this.form.inputKey, //该属性新修改属性名
            value: String(arrOneValue)//新修改属性值应为[]
          })
        )
        .then((responseObjAttr) => {
          if (responseObjAttr.data.status === 1) {
            _this.$message({
              type: "success",
              message: "移除成功!"
            });
            // _this.dialogEditVisible = false;
            _this.lookAttr();
            _this.form.inputNewKey = "";
            _this.form.inputNewValue = "";
          } else if( responseObjAttr.data.resultObj.length === 0){
            console.log(_this.objKey)
            console.log(_this.form.inputKey)
            _this.delAttr()
          }else{
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象属性修改接口请求失败" + error.toString());
        });
    },
    // 文本属性--确认修改
    fixedAttr() {
      var _this = this;
      if (_this.form.inputNewKey == "") {
        _this.form.inputNewKey = _this.form.inputKey;
      } else if (_this.form.inputNewValue == "") {
        _this.form.inputNewValue = _this.form.inputValue;
      }
      axios
        .post(
          "/api/v2/xadmin/object/property/edit/",
          qs.stringify({
            obj_key: _this.objKey, //该扩展属性的主键
            old_key: _this.form.inputKey, //该属性待修改属性名
            key: _this.form.inputNewKey, //该属性新修改属性名
            value: _this.form.inputNewValue //该属性新修改属性值
          })
        )
        .then(function(responseObjAttr) {
          if (responseObjAttr.data.status === 1) {
            _this.$message({
              type: "success",
              message: "修改成功!"
            });
            _this.dialogEditVisible = false;
            _this.lookAttr();
            _this.form.inputNewKey = "";
            _this.form.inputNewValue = "";
          } else if (responseObjAttr.data.status === 2) {
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象属性修改接口请求失败" + error.toString());
        });
    },
    /** ******************************************属性编辑end*********************************************************/
    /*行内关联*/
    connectObj() {
      let _this = this;
      _this.dialogMatchSearch = true;
    },
    /*删除属性*/
    delAttr() {
      var _this = this;
      var objKey = this.$route.params.key;
      axios
        .post(
          "/api/v1/xadmin/object/property/delete/",
          qs.stringify({
            //获取所有扩展属性
            obj_key: _this.objKey, //该扩展属性的主键
            key: _this.form.inputKey //该主键扩展属性属性名
          })
        )
        .then(function(responseObjAttr) {
          if (responseObjAttr.data.status === 1) {
            _this.$message({
              type: "success",
              message: "删除成功!"
            });
            _this.delAttrModelVisible = false;
            _this.lookAttr();
          } else {
            _this.$message({
              type: "info",
              message: JSON.stringify(responseObjAttr.data.message)
            });
          }
        })
        .catch(function(error) {
          console.log("对象属性修改接口请求失败" + error.toString());
        });
    },
    //其他页面进入查看扩展属性
    lookAttr() {
      var _this = this;
      _this.tab=2
      // alert(this.$route.params.key )
      _this.objKey = this.$route.params.key;
      var objName = this.$route.params.name;
      var objAka = this.$route.params.akaName;
      console.log(objName);
      let localStr = window.localStorage.getItem("objkeyAttr");
      if (localStr) {
        _this.objKey = window.localStorage.getItem("objkeyAttr");
        _this.ownerOfAttr = window.localStorage.getItem("ownerOfAttr");
        _this.conceptSearch = window.localStorage.getItem("conceptSearch");
      }
      axios
        .get("/api/v1/xadmin/object/property/", {
          //获取所有扩展属性
          params: {
            obj_key: _this.objKey //从首页传过来的标准名对象主键
          }
        })
        .then(function(resObj) {
          if (resObj.data.status === 1) {
            let oextendKeyValueObj = resObj.data.resultObj;
            let objLengthOfAttr = Object.keys(oextendKeyValueObj).length; //对象长度
            let newAttrTableUnderLine = [];
            let newAttrTable = [];
            if (objLengthOfAttr > 0) {
              for (let key in oextendKeyValueObj) {
                if(key.indexOf('_') != -1 || key == "info"){ //系统默认属性放在表格最上
                  let hasUnderLine = {
                    attrKey: key,
                    attrValue: oextendKeyValueObj[key]
                  }
                   newAttrTableUnderLine.push(hasUnderLine);
                }else{
                  let oInAttrTable = {
                    attrKey: key,
                    attrValue: oextendKeyValueObj[key]
                  };
                  newAttrTable.push(oInAttrTable);
                }
              }
              _this.tableData = newAttrTableUnderLine.concat(newAttrTable);
            }
          } else if (resObj.data.status === 2) {
            _this.$message({
              type: "info",
              message: "未选择相应主键或者无数据,输入框输入主键才能查看结果哦"
            });
          }
        })
        .catch(function(error) {
          console.log("对象扩展属性接口请求失败" + error.toString());
        });
    },

    //添加属性
    handleSubmit() {
      var _this = this;
      var objKey = this.$route.params.key;
      if (
        _this.objExtendAttr == null ||
        _this.objExtendAttr == undefined ||
        _this.objExtendAttr == ""
      ) {
        _this.objExtendAttr = "_move";
      }
      if (_this.inputValue !== null || _this.objExtendAttrValue !== null) {
        console.log(this.$route.params.key);
        axios
          .post(
            "api/v3/xadmin/object/property/add/",
            qs.stringify({
              obj_key: _this.objKey, //从基本管理页传过来的主键
              key: _this.objExtendAttr, //扩展属性名
              value: _this.objExtendAttrValue //扩展属性值
            })
          )
          .then(function(resObjExtendAttr) {
            if (resObjExtendAttr.data.status === 1) {
              _this.$message({
                type: "success",
                message: "添加成功!（若是移动的内容，会在0点移动到指定概念下）"
              });
              _this.lookAttr();

              _this.objExtendAttr = "";
              _this.objExtendAttrValue = "";
            } else if (resObjExtendAttr.data.status == 2) {
              _this.$message({
                type: "info",
                message: "对象属性添加失败!"
              });
            }
          })
          .catch(function(error) {
            console.log("对象扩展属性添加接口请求失败" + error.toString());
          });
        // this.list.push(this.inputValue);
        /*this.inputValue = ''*/
      }
    },

    /*----------------------------------------待封装--------------------------------------------------------*/
    //显然默认的选择数据
    defaultSelect() {
      // 获取所有概念名
      let _this = this;
      this.axios
        .get("/api/v1/xadmin/relation/topology/")
        .then(response => {
          if (response["data"]["message"] == "success") {
            let restaurants = [];
            var responseResultObj = response["data"]["resultObj"];
            if (responseResultObj && responseResultObj instanceof Array) {
              responseResultObj.forEach(function(val) {
                var opt = {
                  value: val,
                  label: val
                };
                restaurants.push(opt);
              });
              if (restaurants.length > 0) {
                _this.moveObjOptions = restaurants;
                _this.hiddenConceptSearch = restaurants;
                _this.options5 = restaurants;
              }
            }
          } else {
            _this.errorMessage();
          }
        })
        .catch(err => {
          // _this.$message({
          //   message: err,
          //   type: 'warning'
          // });
        });
    },
    //创建对象
    createObject() {
      this.hiddenValue = ""; //创建对象中选中的值
      this.hiddenName = ""; // 创建对象中的标准名
      this.hiddenAkaName = ""; // 创建对象中的别称
      this.dialogTableVisible = true;
    },
    //创建对象中的tab切换
    handleClick(tab, event) {},
    //创建对象中的 确认按钮
    confirmCreate() {
      let _this = this;
      let sendOpt = {
        obj_name: this.hiddenName,
        aka: this.hiddenAkaName,
        c_name: this.hiddenValue
      };
      // 创建对象
      if (this.hiddenName.length > 0 && this.hiddenValue.length > 0) {
        _this.axios
          .post("/api/v1/xadmin/object/create/", qs.stringify(sendOpt), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res => {
            if (res["data"]["status"]) {
              _this.$message({
                showClose: true,
                message: "创建成功",
                type: "success"
              });
              _this.dialogTableVisible = false;
            } else {
              let errorMessage = res["data"]["message"]
                ? res["data"]["message"]
                : "创建失败";
              _this.$message({
                showClose: true,
                message: errorMessage,
                type: "error"
              });
            }
          })
          .catch(() => {
            _this.$message({
              showClose: true,
              message: "服务器500",
              type: "error"
            });
            _this.dialogTableVisible = false;
          });
      } else {
        _this.$message({
          showClose: true,
          message: "类型和标准名不能为空",
          type: "error"
        });
      }
    },
    //创建对象中的取消按钮
    cancelCreate() {
      this.dialogTableVisible = false;
    },
    // 将每一行的序号放入每行的数据中
    tableRowClassName({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    },

    //  点击开始匹配按钮
    matchMethod(matchStr, resultObj) {
      let matchData = resultObj["number"]; // 所有的切割词语
      let dataKey = resultObj["keys"]; // 所有的主键
      let _this = this;
      if (matchData.length > 0) {
        let resetStr = "";
        matchData.forEach((val, index) => {
          if (index == 0 && val["start_pos"] !== 0) {
            resetStr += matchStr.slice(0, val["start_pos"]);
            resetStr += `<div class="renderDom"><span class="span_title span_title${index}">${
              val["text"]
            }</span><span class="span_number span_number${index}">${
              val["number"]
            }</span></div>`;
          } else if (index == 0 && val["start_pos"] == 0) {
            resetStr += `<div class="renderDom"><span class="span_title span_title${index}">${
              val["text"]
            }</span><span class="span_number span_number${index}">${
              val["number"]
            }</span></div>`;
          } else {
            if (index < matchData.length) {
              if (val["start_pos"] > matchData[index - 1]["end_pos"]) {
                resetStr += matchStr.slice(
                  matchData[index - 1]["end_pos"],
                  val["start_pos"]
                );
                resetStr += `<div class="renderDom"><span class="span_title span_title${index}">${
                  val["text"]
                }</span><span class="span_number span_number${index}">${
                  val["number"]
                }</span></div>`;
              } else if (val["start_pos"] == matchData[index - 1]["end_pos"]) {
                resetStr += `<div class="renderDom"><span class="span_title span_title${index}">${
                  val["text"]
                }</span><span class="span_number span_number${index}">${
                  val["number"]
                }</span></div>`;
              }
              if (matchData.length - 1 == index) {
                resetStr += matchStr.slice(val["end_pos"], matchStr.length);
              }
            }
          }
          if (matchData.length - 1 == index) {
            _this.resetRenderStr = resetStr;
          }
        });
      }
      this.$nextTick().then(() => {
        // 点击文字
        $(".span_title").on("click", function() {
          let children = this.parentNode.childNodes;
          let selectName = $(this)
            .attr("class")
            .split(" ");
          if (selectName.length <= 2) {
            // console.log($(children[0]).text());

            // 相关联的key值
            let keysName = _this.nameSearchKey($(children[0]).text(), dataKey);
            if (keysName.length > 0) {
              _this.createRelationBatch(_this.initObjectKey, keysName); // 创建关系
              $(`.${selectName[1]}`).addClass("span_title_selected");
            }
          } else if (selectName.length == 3) {
            let keysName = _this.nameSearchKey($(children[0]).text(), dataKey);
            if (keysName.length > 0) {
              _this.deleteRelationBatch(_this.initObjectKey, keysName); // 删除关系
              $(`.${selectName[1]}`).removeClass("span_title_selected");
            }
          }
        });
        //  点击数字
        $(".span_number").on("click", function() {
          let children = this.parentNode.childNodes;
          _this.innerVisibleValue = $(children[0]).text();
          // }
          _this.handleSelect(_this.innerVisibleValue);
          _this.innerVisible = true;
        });
      });
    },

    // 匹配接口 （按钮）
    matchType(matchStr) {
      let sendOpt = {}
      if(matchStr instanceof Array){
        sendOpt = {
          text: matchStr.toString()
        };
      }else{
        sendOpt = {
          text: matchStr
        };
      }
      
      this.axios
        .post("/api/v1/xadmin/objects/new_match/", qs.stringify(sendOpt), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          if (res["data"]["status"] == 1) {
            let resultObj = res["data"]["resultObj"];
            if (Object.keys(resultObj).length > 0) {
              this.matchMethod(matchStr, resultObj);
              this.dialogMatchSearch = true;
            }
          } else {
            this.$message({
              showClose: true,
              message: res["data"]["message"],
              type: "warning"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 单机表格事件  c169_f1zE1cKw
    innerVisibleBtn(row, column, cell, event) {
      if (column["label"] == "关联") {
        let resetRenderNumberShow = this.resetRenderNumberShow;
        if (
          resetRenderNumberShow.length > 0 &&
          resetRenderNumberShow.indexOf(row["index"]) != -1
        ) {
          this.deleteRelationData(row);
        } else {
          this.createRelationData(row);
        }
      } else if (column["label"] == "查看属性") {
        this.searchExtend(row, true);
      }
    },
    //  删除对象关系 (单条)
    deleteRelationData(row) {
      let _this = this;
      if (this.initObjectKey.length > 0) {
        let sendOpt = {
          source_obj: this.initObjectKey,
          target_obj: row["key"],
          rel_name: "是"
        };
        this.axios
          .get("/api/v3/xadmin/relation/delete/", {
            params: sendOpt
          })
          .then(res => {
            if (res["data"]["status"] == 0) {
              _this.resetRenderNumberShow.splice(
                _this.resetRenderNumberShow.indexOf(row["index"]),
                1
              );
              _this.resetRenderBtnShow.splice(row["index"], 1, false);
              _this.$message({
                showClose: true,
                message: "删除成功",
                type: "success"
              });
            } else {
              _this.$message({
                showClose: true,
                message: res["data"]["message"],
                type: "error"
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    //  创建对象关系 (单条)
    createRelationData(row) {
      let _this = this;
      _this.initObjectKey = row.key;
      if (this.initObjectKey.length > 0) {
        let sendOpt = {
          source_obj: this.initObjectKey,
          target_obj: row["key"],
          rel_name: "是"
        };
        this.axios
          .get("/api/v3/xadmin/relation/create/", {
            params: sendOpt
          })
          .then(res => {
            if (res["data"]["status"]) {
              _this.resetRenderNumberShow.push(row["index"]);
              _this.resetRenderBtnShow.splice(row["index"], 1, "true");
              _this.$message({
                showClose: true,
                message: "关联成功",
                type: "success"
              });
            } else {
              _this.$message({
                showClose: true,
                message: res["data"]["message"],
                type: "error"
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 点击关联数字出的关联内容表
    handleSelect(item, state) {
      let _this = this;
      // _this.showTable = true;
      // _this.gridDataExtends = [];
      // _this.showTableTitle = false;
      let inputValue = item;
      if (inputValue.length > 0) {
        //一般搜索接口地址 https://www.showdoc.cc/138691617729638?page_id=882327411061531
        let sendOpt = {
          text: inputValue, //查询文本
          maxWordWidth: 50 //最大匹配长度，
        };
        this.axios
          .post("/api/v1/xadmin/objects/search/", qs.stringify(sendOpt), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res => {
            if (res["data"]["message"] == "success") {
              let resultObj = res["data"]["resultObj"];
              resultObj.forEach(arrVal => {
                for (let keyName in arrVal) {
                  if (
                    keyName == "sentence_structures" &&
                    arrVal[keyName].length > 0
                  ) {
                    let sentence_structures = arrVal[keyName];
                    sentence_structures.forEach(function(
                      minSentence_structures
                    ) {
                      for (let sentenceKey in minSentence_structures) {
                        if (
                          sentenceKey == "terms" &&
                          minSentence_structures[sentenceKey].length > 0
                        ) {
                          let terms = minSentence_structures[sentenceKey];
                          terms.forEach(minTerm => {
                            for (let termsKey in minTerm) {
                              if (
                                termsKey == "objects" &&
                                minTerm[termsKey].length > 0
                              ) {
                                let objects = minTerm[termsKey];
                                let tableData = objects.map(minObject => {
                                  if (
                                    Array.isArray(minObject["aka"]) &&
                                    minObject["aka"].length > 0
                                  ) {
                                    return {
                                      key: minObject["name"],
                                      name: minObject["obj_name"],
                                      akaName: minObject["aka"].join(","),
                                      allType: minObject["c_name"],
                                      extendType: ""
                                    };
                                  } else {
                                    return {
                                      key: minObject["name"],
                                      name: minObject["obj_name"],
                                      akaName: minObject["aka"],
                                      allType: minObject["c_name"],
                                      extendType: ""
                                    };
                                  }
                                });
                                if (state) {
                                  _this.tableData3 = tableData;
                                } else {
                                  _this.initBtnStatus(tableData.length);
                                  _this.innerVisibleTableData = tableData;
                                }
                              } else if (
                                termsKey == "objects" &&
                                minTerm[termsKey].length == 0
                              ) {
                                // _this.$message({
                                //   showClose: true,
                                //   message: '没有数据',
                                //   type: 'warning'
                                // });
                              }
                            }
                          });
                        }
                      }
                    });
                  }
                }
              });
            } else {
              this.$message({
                showClose: true,
                message: res["data"]["message"],
                type: "warning"
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 初始化按钮状态
    initBtnStatus(num) {
      this.resetRenderNumberShow = [];
      this.resetRenderBtnShow = [];
      for (let i = 0; i < num; i++) {
        this.resetRenderBtnShow.push(false);
      }
    },
    // 批量创建关系
    createRelationBatch(targetKey, keys) {
      // keys主键key  []  targetKey 选中的对象的key 值
      let keysArr = keys.map(val => {
        return {
          source_obj: targetKey,
          target_obj: val,
          rel_name: "是"
        };
      });
      let sendOpt = {
        data: JSON.stringify(keysArr)
      };
      this.axios
        .post("/api/v1/xadmin/relation/create/", qs.stringify(sendOpt), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          if (res["data"]["status"]) {
            this.$message({
              showClose: true,
              message: "关联成功",
              type: "success"
            });
          } else {
            this.$message({
              showClose: true,
              message: res["data"]["message"],
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 批量删除关系

    deleteRelationBatch(targetKey, keys) {
      // keys主键key  []  targetKey 选中的对象的key 值
      let keysArr = keys.map(val => {
        return {
          source_obj: targetKey,
          target_obj: val.name,
          rel_name: "是"
        };
      });
      let sendOpt = {
        data: JSON.stringify(keysArr)
      };
      this.axios
        .post("/api/v3/xadmin/relation/delete/", qs.stringify(sendOpt), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          if (res["data"]["status"] == 0) {
            this.$message({
              showClose: true,
              message: "删除成功",
              type: "success"
            });
          } else {
            this.$message({
              showClose: true,
              message: res["data"]["message"],
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查看扩展属性
    searchExtend(row, state) {
      if (row["key"]) {
        this.gridDataExtend = [];
        this.axios
          .get("/api/v1/xadmin/object/property/", {
            params: {
              obj_key: row["key"]
            }
          })
          .then(res => {
            if (res["data"]["message"] == "success") {
              let resultObj = res["data"]["resultObj"];
              if (Object.keys(resultObj).length > 0) {
                let sendArr = [];
                for (let keyName in resultObj) {
                  if (
                    Array.isArray(resultObj[keyName]) &&
                    resultObj[keyName].length > 0
                  ) {
                    let opt = {
                      names: keyName,
                      values:
                        "[" + resultObj[keyName].slice(0, 4).join(",") + "]"
                    };
                    sendArr.push(opt);
                  } else {
                    let opt = {
                      names: keyName,
                      values: resultObj[keyName]
                    };
                    sendArr.push(opt);
                  }
                }
                if (state) {
                  this.clickGetData = sendArr;
                } else {
                  this.gridDataExtends = sendArr;
                }
              } else {
                this.$message({
                  showClose: true,
                  type: "info",
                  message: "res['data']['resultObj']为空"
                });
              }
            } else {
              this.$message({
                showClose: true,
                type: "info",
                message: res["data"]["message"]
              });
            }
          })
          .catch(err => {
            this.$message({
              showClose: true,
              type: "info",
              message: "服务器500"
            });
          });
      }
    },
    // 根据名字查找相关联的key值
    nameSearchKey(text, dataKey) {
      if (Object.keys(dataKey).length > 0 && text) {
        let keyName = [];
        for (let key in dataKey) {
          if (key == text && dataKey[key].length > 0) {
            keyName = dataKey[key];
          }
        }
        if (keyName.length > 0) {
          return keyName;
        }
      }
    }
  }
};
</script>
<style scoped>
html,
body {
  font-size: 15px;
}
h1,
h5 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 15px 0;
}

li {
  display: inline-block;
  margin-right: 5px;
}

a {
  color: #fff;
  text-decoration: none;
}

div.container {
  height: 100%;
  width: 100%;
  /*background-color: #525c65;*/
}
.app_box_right ul li{
    border-right:1px solid #ccc;
    padding:0 5px;
  }
.attr-nav{
  height: 3.5em; 
  background: #525c65;
  color: #fff;
}
.input-basic {
  width: 13%;
  position: relative;
  float:right;
  top:-8px;
}
.white-space {
  white-space: normal;
  line-height: 20px;
  font-size: 16px;
  text-indent: 2cm;
}
.creat-obj-in-relation {
  position: absolute;
  top: 63px;
  right: 21px;
}

.transverter{
  padding: 8px ;
}
/*待封装*/
.createFirstBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.createFirst {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.createSecond {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
.createEndBtn {
  height: 40px;
  width: 300px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.match_dialog {
  width: 100%;
}
.match_dialog_title {
  width: 100%;
  height: 40px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 15px;
  box-sizing: border-box;
}
.match_dialog_body {
  width: 100%;
  padding: 15px 15px 15px 15px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  line-height: 25px;
  border-top: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.renderDom {
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}
.span_title {
  padding: 2px 0px;
  color: red;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.span_title_selected {
  color: blue;
}
.span_number {
  padding: 2px 6px;
  display: inline-block;
  line-height: 20px;
  border: 1px solid red !important;
  cursor: pointer;
  border-radius: 4px;
}
.input-attr {
   display: inline-block; 
   width: 100%;
  height: 50px;
  font-size: 15px;
  /* background: #afe2eb54 */
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
