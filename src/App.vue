<template>
	<el-container>
		<span>{{now.title}}</span>
		<el-radio-group v-model="radio" @change="onChoice">
			<el-radio label="0" border>{{option[0]}}</el-radio> 
			<el-radio label="1" border>{{option[1]}}</el-radio>
			<el-radio label="2" border>{{option[2]}}</el-radio>
			<el-radio label="3" border>{{option[3]}}</el-radio>
		</el-radio-group>
		<div v-if="flag">
			<p style="margin: 24px 0 24px 0">你选择的答案：<span style="color: #F56C6C;">{{option[radio]}}</span></p>
			<p>正确的答案是：<span style="color: #67C23A;">{{option[now["answer"]]}}</span></p>
		</div>
		<div style="display: flex; margin-top: 30px; margin-bottom: 30px;">
			<el-button type="primary" @click="onPre()">上一题</el-button>
			<el-button type="primary" @click="onNext()">下一题</el-button>
		</div>
		<el-select v-model="value" placeholder="选择题号" @change="onSelect">
			<el-option
				v-for="item in options"
				:key="item"
				:value="item"
				:label="'第 '+item+' 题'">
			</el-option>
		</el-select>
	</el-container>
</template>

<script>
	import { ElMessage } from 'element-plus'
	
	export default {
		name: 'App',
		data() {
			return {
				list: '',
				now: '',
				radio: '',
				option: '',
				flag: false,
				num: 0,
				value: 1,
				options: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
					41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
					61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
					81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 
					101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 
					121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 
					141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 
					161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180
				]
			}
		},
		created() {
			this.list = require("./assets/data.json")["list"]
			this.now = this.list[this.num]
			this.option = this.now["option"]
		},
		methods: {
			onChoice() {
				if(this.radio == this.now["answer"]) {
					ElMessage({
						message: '恭喜你答对了！',
						type: 'success',
						duration: 1000
					})
					this.flag = false
				}else {
					ElMessage({
						message: '很遗憾你答错了！',
						type: 'error',
						duration: 1000,
					})
					this.flag = true
				}
			},
			onPre() {
				if(this.num >= 1) {
					this.flag = false
					this.radio = ''
					this.num--
					this.now = this.list[this.num]
					this.option = this.now["option"]
				}else {
					ElMessage({
						message: '已经是第一题了',
						type: 'error',
						duration: 1000,
					})
				}
			},
			onNext() {
				if(this.num < this.list.length-1) {
					this.flag = false
					this.radio = ''
					this.num++
					this.now = this.list[this.num]
					this.option = this.now["option"]
				}else {
					ElMessage({
						message: '已经是最后一题了',
						type: 'error',
						duration: 1000,
					})
				}
			},
			onSelect() {
				this.flag = false
				this.radio = ''
				this.num = this.value - 1
				this.now = this.list[this.num]
				this.option = this.now["option"]
			}
		}
	}
</script>

<style>
	p {
		font-size: 12px;
	}
	
	.el-button {
		width: 100%;
	}
	
	.el-container {
		padding: 20px;
		flex-flow: column !important;
	}
	
	.el-radio-group {
		display: flex !important;
		flex-flow: column;
	}
	
	.el-radio {
		height: auto !important;
		margin-left: 0 !important;
		margin-right: 0 !important;
		margin-top: 20px;
		padding: 8px 12px !important;
		white-space: normal !important;
		line-height: 18px !important;
	}
</style>
