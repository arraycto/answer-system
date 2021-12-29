import { 
	ElButton,
	ElContainer,
	ElRadio,
	ElRadioGroup,
	ElSelect,
	ElOption
} from 'element-plus'

export default (app) => {
  app.use(ElButton)
	app.use(ElContainer)
	app.use(ElRadio)
	app.use(ElRadioGroup)
	app.use(ElSelect)
	app.use(ElOption)
}
