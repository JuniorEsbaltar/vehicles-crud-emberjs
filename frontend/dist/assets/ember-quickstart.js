'use strict';



;define("ember-quickstart/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-quickstart/app", ["exports", "ember-resolver", "ember-load-initializers", "ember-quickstart/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-quickstart/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-quickstart/components/vehicle-cart", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="mb-3 ml-4">
      <div class="card" style="width: 18rem;">
          <img class="card-img-top"
              src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_675/https://azultecnologia.com/wp-content/uploads/2019/04/278583-saiba-mais-sobre-rastreamento-para-carros-alugados-1200x675.jpg"
              alt="Car default IMG"
          >
          <div class="card-body">
              <div class="card-text  row justify-content-between">{{@vehicle.plate}}  <LinkTo @route='vehicle' @model={{@vehicle.id}}>| Editar |</LinkTo> <p style="cursor: pointer;"{{on "click" (fn @delete @vehicle.id)}}>Excluir</p></div>
          </div>
      </div>
      {{yield}}
  </div>
  */
  {
    "id": "VsvLBA1P",
    "block": "{\"symbols\":[\"@vehicle\",\"@delete\",\"&default\"],\"statements\":[[10,\"div\"],[14,0,\"mb-3 ml-4\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"card\"],[14,5,\"width: 18rem;\"],[12],[2,\"\\n        \"],[10,\"img\"],[14,0,\"card-img-top\"],[14,\"src\",\"https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_675/https://azultecnologia.com/wp-content/uploads/2019/04/278583-saiba-mais-sobre-rastreamento-para-carros-alugados-1200x675.jpg\"],[14,\"alt\",\"Car default IMG\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"card-body\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"card-text  row justify-content-between\"],[12],[1,[32,1,[\"plate\"]]],[2,\"  \"],[8,\"link-to\",[],[[\"@route\",\"@model\"],[\"vehicle\",[32,1,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"| Editar |\"]],\"parameters\":[]}]]],[2,\" \"],[11,\"p\"],[24,5,\"cursor: pointer;\"],[4,[38,1],[\"click\",[30,[36,0],[[32,2],[32,1,[\"id\"]]],null]],null],[12],[2,\"Excluir\"],[13],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[18,3,null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\"]}",
    "moduleName": "ember-quickstart/components/vehicle-cart.hbs"
  });

  class VehicleCartComponent extends _component.default {}

  _exports.default = VehicleCartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, VehicleCartComponent);
});
;define("ember-quickstart/components/vehicle-edit-form", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form class="row justify-content-md-center mt-2">
    <div class="row mt-2">
      {{@paramId}}
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <select class="custom-select form-control" onchange={{action "changeType" value="target.value" }}
            value={{this.type}}>
            <option value="">Tipo</option>
            <option value="carros">Carro</option>
            <option value="motos">Moto</option>
            <option value="caminhoes">Caminhões</option>
          </select>
          <small class="text-danger">{{this.error.type}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <select class="custom-select form-control" onchange={{action "changeBrand" value="target.value" }}
            value={{this.brand}}>
            <option value="">Marcas</option>
            {{#each this.brands as |brand|}}
            <option value="{{brand.codigo}}">{{brand.nome}}</option>
            {{/each}}
          </select>
          <small class="text-danger">{{this.error.brand}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <select 
            class="custom-select form-control"
            onchange={{action "changeModel" value="target.value" }}
            value={{this.model}}
          >
            <option value="">Modelos</option>
            {{#each this.models as |model|}}
            <option value="{{model.codigo}}">{{model.nome}}</option>
            {{/each}}
          </select>
          <small class="text-danger">{{this.error.model}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <Input class="form-control form-control-md" type="text" placeholder="Versão" @value={{this.version}} />
          <small class="text-danger">{{this.error.version}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <Input class="form-control form-control-md" type="text" placeholder="Placa" @value={{this.plate}} />
          <small class="text-danger">{{this.error.plate}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <Input class="form-control form-control-md" type="text" placeholder="Ano" @value={{this.year}} />
          <small class="text-danger">{{this.error.year}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-6 col-sm-12">
        <fieldset class="form-group">
          <Input class="form-control form-control-md" type="text" placeholder="Chassi" @value={{this.chassi}} />
          <small class="text-danger">{{this.error.chassi}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-6 col-sm-12">
        <fieldset class="form-group">
          <select class="custom-select" onchange={{action "changeColor" value="target.value" }} value={{this.colorId}}>
            <option value="">Cor</option>
            {{#each this.colors as |color|}}
            <option value="{{color.id}}">{{color.name}}</option>
            {{/each}}
          </select>
          <small class="text-danger">{{this.error.color}}</small>
        </fieldset>
      </div>
    </div>
  
    <div class="row ">
      <button class="btn btn-md btn-success mx-4" type="button" {{on "click" this.submit}}>
        Atualizar
      </button>
      <LinkTo @route="vehicles">
        <button class="btn btn-md btn-light" type="button">
          Voltar
        </button>
      </LinkTo>
  
    </div>
  </form>
  */
  {
    "id": "7Vml4sgL",
    "block": "{\"symbols\":[\"color\",\"model\",\"brand\",\"@paramId\"],\"statements\":[[10,\"form\"],[14,0,\"row justify-content-md-center mt-2\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-2\"],[12],[2,\"\\n    \"],[1,[32,4]],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select form-control\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeType\"],[[\"value\"],[\"target.value\"]]]],[15,2,[32,0,[\"type\"]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Tipo\"],[13],[2,\"\\n          \"],[10,\"option\"],[14,2,\"carros\"],[12],[2,\"Carro\"],[13],[2,\"\\n          \"],[10,\"option\"],[14,2,\"motos\"],[12],[2,\"Moto\"],[13],[2,\"\\n          \"],[10,\"option\"],[14,2,\"caminhoes\"],[12],[2,\"Caminhões\"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"type\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select form-control\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeBrand\"],[[\"value\"],[\"target.value\"]]]],[15,2,[32,0,[\"brand\"]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Marcas\"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"brands\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"option\"],[15,2,[31,[[32,3,[\"codigo\"]]]]],[12],[1,[32,3,[\"nome\"]]],[13],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"brand\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select form-control\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeModel\"],[[\"value\"],[\"target.value\"]]]],[15,2,[32,0,[\"model\"]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Modelos\"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"models\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"option\"],[15,2,[31,[[32,2,[\"codigo\"]]]]],[12],[1,[32,2,[\"nome\"]]],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"model\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Versão\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"version\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"version\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Placa\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"plate\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"plate\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Ano\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"year\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"year\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-6 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Chassi\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"chassi\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"chassi\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-6 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeColor\"],[[\"value\"],[\"target.value\"]]]],[15,2,[32,0,[\"colorId\"]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Cor\"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"colors\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"option\"],[15,2,[31,[[32,1,[\"id\"]]]]],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"color\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row \"],[12],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-md btn-success mx-4\"],[24,4,\"button\"],[4,[38,3],[\"click\",[32,0,[\"submit\"]]],null],[12],[2,\"\\n      Atualizar\\n    \"],[13],[2,\"\\n    \"],[8,\"link-to\",[],[[\"@route\"],[\"vehicles\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[10,\"button\"],[14,0,\"btn btn-md btn-light\"],[14,4,\"button\"],[12],[2,\"\\n        Voltar\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\",\"-track-array\",\"each\",\"on\"]}",
    "moduleName": "ember-quickstart/components/vehicle-edit-form.hbs"
  });

  let VehicleEditFormComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._tracked, _dec11 = Ember._tracked, _dec12 = Ember._tracked, _dec13 = Ember._tracked, _dec14 = Ember._tracked, _dec15 = Ember._action, _dec16 = Ember._action, _dec17 = Ember._action, _dec18 = Ember._action, _dec19 = Ember._action, (_class = class VehicleEditFormComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "plate", _descriptor2, this);

      _initializerDefineProperty(this, "brand", _descriptor3, this);

      _initializerDefineProperty(this, "model", _descriptor4, this);

      _initializerDefineProperty(this, "version", _descriptor5, this);

      _initializerDefineProperty(this, "year", _descriptor6, this);

      _initializerDefineProperty(this, "chassi", _descriptor7, this);

      _initializerDefineProperty(this, "imageUrl", _descriptor8, this);

      _initializerDefineProperty(this, "colorId", _descriptor9, this);

      _initializerDefineProperty(this, "error", _descriptor10, this);

      _initializerDefineProperty(this, "colors", _descriptor11, this);

      _initializerDefineProperty(this, "type", _descriptor12, this);

      _initializerDefineProperty(this, "models", _descriptor13, this);

      _initializerDefineProperty(this, "brands", _descriptor14, this);

      this.findColors();
      this.findOneVehicle();
    }

    async findOneVehicle() {
      const response = await fetch(`http://localhost:3333/vehicle/${this.router.currentRoute.attributes}`, {
        method: 'GET'
      });
      const data = await response.json();
      console.log(data);
      this.plate = data.plate;
      this.type = data.type;
      this.version = data.version;
      this.colorId = data.color.id;
      this.chassi = data.chassi;
      await this.changeType(data.type);
      await this.changeBrand(data.brand);
      this.model = Number(data.model);
      this.brand = Number(data.brand);
      this.year = data.year;
    }

    async findColors() {
      const response = await fetch(`http://localhost:3333/colors`, {
        method: 'GET'
      });
      this.colors = await response.json();
    }

    changeColor(color) {
      this.colorId = color;
    }

    async changeType(type) {
      this.type = type;
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`, {
        method: 'GET'
      });
      this.brands = await response.json();
      return;
    }

    async changeBrand(brand) {
      this.brand = brand;
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${this.type}/marcas/${brand}/modelos`, {
        method: 'GET'
      });
      this.models = (await response.json()).modelos;
      return;
    }

    changeModel(model) {
      this.model = model;
    }

    async submit(event) {
      event.preventDefault();

      try {
        const response = await fetch(`http://localhost:3333/vehicle/${this.router.currentRoute.attributes}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            plate: this.plate,
            brand: this.brand,
            model: this.model,
            version: this.version,
            year: this.year,
            chassi: this.chassi,
            colorId: this.colorId,
            type: this.type
          })
        });

        if (response.status === 200) {
          this.router.transitionTo('/vehicles');
        } else {
          const data = await response.json();
          const errors = {};
          data.errors.forEach(({
            fieldName,
            message
          }) => errors[fieldName] = message);
          this.error = errors;
        }
      } catch (err) {
        console.log(err);
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "plate", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "brand", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "model", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "year", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "chassi", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "imageUrl", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "colorId", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "error", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "colors", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "models", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "brands", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeColor", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "changeColor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeType", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "changeType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeBrand", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "changeBrand"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeModel", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "changeModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submit", [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = VehicleEditFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, VehicleEditFormComponent);
});
;define("ember-quickstart/components/vehicle-form", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form class="row justify-content-md-center mt-2">
    <div class="row mt-2">
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <select 
            class="custom-select form-control"
            onchange={{action "changeType" value="target.value"}}
          >
            <option value="">Tipo</option>
              <option value="carros">Carro</option>
              <option value="motos">Moto</option>
              <option value="caminhoes">Caminhões</option>
          </select>
          <small class="text-danger">{{this.error.type}}</small>
        </fieldset>
      </div>
       <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <select 
            class="custom-select form-control"
            onchange={{action "changeBrand" value="target.value"}}
          >
            <option value="">Marcas</option>
            {{#each this.brands as |brand|}}
              <option value="{{brand.codigo}}">{{brand.nome}}</option>
            {{/each}}
          </select>
          <small class="text-danger">{{this.error.brand}}</small>
        </fieldset>
      </div>
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <select 
            class="custom-select form-control"
            onchange={{action "changeModel" value="target.value"}}
          >
            <option value="">Modelos</option>
            {{#each this.models as |model|}}
              <option value="{{model.codigo}}">{{model.nome}}</option>
            {{/each}}
          </select>
          <small class="text-danger">{{this.error.model}}</small>
        </fieldset>
      </div>
  
       <div class="col-md-4 col-sm-12" >
        <fieldset class="form-group">
          <Input 
            class="form-control form-control-md"
            type="text"
            placeholder="Versão"
            @value={{this.version}}
          />
            <small class="text-danger">{{this.error.version}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <Input 
            class="form-control form-control-md"
            type="text"
            placeholder="Placa"
            @value={{this.plate}}
          />
          <small class="text-danger">{{this.error.plate}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-4 col-sm-12">
        <fieldset class="form-group">
          <Input 
            class="form-control form-control-md"
            type="text"
            placeholder="Ano"
            @value={{this.year}}
          />
          <small class="text-danger">{{this.error.year}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-6 col-sm-12">
        <fieldset class="form-group">
          <Input 
            class="form-control form-control-md"
            type="text"
            placeholder="Chassi"
            @value={{this.chassi}}
          />
          <small class="text-danger">{{this.error.chassi}}</small>
        </fieldset>
      </div>
  
      <div class="col-md-6 col-sm-12">
        <fieldset class="form-group">
          <select 
            class="custom-select"
            onchange={{action "changeColor" value="target.value"}}
          >
            <option value="">Cor</option>
            {{#each this.colors as |color|}}
              <option value="{{color.id}}">{{color.name}}</option>
            {{/each}}
          </select>
          <small class="text-danger">{{this.error.color}}</small>
        </fieldset>
      </div>
    </div>
  
    <div class="row ">
      <button 
        class="btn btn-md btn-success mx-4" 
        type="button"
        {{on "click" this.submit}} 
      >
        Cadastrar
      </button>
      <LinkTo @route="vehicles">
        <button class="btn btn-md btn-light" type="button">
          Voltar
        </button>
      </LinkTo>
  
    </div>
  </form>
  
  */
  {
    "id": "rZAZhKA4",
    "block": "{\"symbols\":[\"color\",\"model\",\"brand\"],\"statements\":[[10,\"form\"],[14,0,\"row justify-content-md-center mt-2\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-2\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select form-control\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeType\"],[[\"value\"],[\"target.value\"]]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Tipo\"],[13],[2,\"\\n            \"],[10,\"option\"],[14,2,\"carros\"],[12],[2,\"Carro\"],[13],[2,\"\\n            \"],[10,\"option\"],[14,2,\"motos\"],[12],[2,\"Moto\"],[13],[2,\"\\n            \"],[10,\"option\"],[14,2,\"caminhoes\"],[12],[2,\"Caminhões\"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"type\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n     \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select form-control\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeBrand\"],[[\"value\"],[\"target.value\"]]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Marcas\"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"brands\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"option\"],[15,2,[31,[[32,3,[\"codigo\"]]]]],[12],[1,[32,3,[\"nome\"]]],[13],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"brand\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select form-control\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeModel\"],[[\"value\"],[\"target.value\"]]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Modelos\"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"models\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"option\"],[15,2,[31,[[32,2,[\"codigo\"]]]]],[12],[1,[32,2,[\"nome\"]]],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"model\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n     \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Versão\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"version\"]]]],null],[2,\"\\n          \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"version\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Placa\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"plate\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"plate\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-4 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Ano\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"year\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"year\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-6 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,0,\"form-control form-control-md\"],[24,\"placeholder\",\"Chassi\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"chassi\"]]]],null],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"chassi\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col-md-6 col-sm-12\"],[12],[2,\"\\n      \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n        \"],[10,\"select\"],[14,0,\"custom-select\"],[15,\"onchange\",[30,[36,0],[[32,0],\"changeColor\"],[[\"value\"],[\"target.value\"]]]],[12],[2,\"\\n          \"],[10,\"option\"],[14,2,\"\"],[12],[2,\"Cor\"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"colors\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"option\"],[15,2,[31,[[32,1,[\"id\"]]]]],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"small\"],[14,0,\"text-danger\"],[12],[1,[32,0,[\"error\",\"color\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row \"],[12],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-md btn-success mx-4\"],[24,4,\"button\"],[4,[38,3],[\"click\",[32,0,[\"submit\"]]],null],[12],[2,\"\\n      Cadastrar\\n    \"],[13],[2,\"\\n    \"],[8,\"link-to\",[],[[\"@route\"],[\"vehicles\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[10,\"button\"],[14,0,\"btn btn-md btn-light\"],[14,4,\"button\"],[12],[2,\"\\n        Voltar\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"-track-array\",\"each\",\"on\"]}",
    "moduleName": "ember-quickstart/components/vehicle-form.hbs"
  });

  let VehicleFormComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._tracked, _dec11 = Ember._tracked, _dec12 = Ember._tracked, _dec13 = Ember._tracked, _dec14 = Ember._tracked, _dec15 = Ember._action, _dec16 = Ember._action, _dec17 = Ember._action, _dec18 = Ember._action, _dec19 = Ember._action, (_class = class VehicleFormComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "plate", _descriptor2, this);

      _initializerDefineProperty(this, "brand", _descriptor3, this);

      _initializerDefineProperty(this, "model", _descriptor4, this);

      _initializerDefineProperty(this, "version", _descriptor5, this);

      _initializerDefineProperty(this, "year", _descriptor6, this);

      _initializerDefineProperty(this, "chassi", _descriptor7, this);

      _initializerDefineProperty(this, "imageUrl", _descriptor8, this);

      _initializerDefineProperty(this, "colorId", _descriptor9, this);

      _initializerDefineProperty(this, "error", _descriptor10, this);

      _initializerDefineProperty(this, "colors", _descriptor11, this);

      _initializerDefineProperty(this, "type", _descriptor12, this);

      _initializerDefineProperty(this, "models", _descriptor13, this);

      _initializerDefineProperty(this, "brands", _descriptor14, this);

      this.findColors();
    }

    async findColors() {
      const response = await fetch(`http://localhost:3333/colors`, {
        method: 'GET'
      });
      this.colors = await response.json();
    }

    changeColor(color) {
      this.colorId = color;
    }

    async changeType(type) {
      this.type = type;
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`, {
        method: 'GET'
      });
      this.brands = await response.json();
    }

    async changeBrand(brand) {
      this.brand = brand;
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${this.type}/marcas/${brand}/modelos`, {
        method: 'GET'
      });
      this.models = (await response.json()).modelos;
    }

    changeModel(model) {
      this.model = model;
    }

    async submit(event) {
      event.preventDefault();

      try {
        const response = await fetch(`http://localhost:3333/vehicle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            plate: this.plate,
            brand: this.brand,
            model: this.model,
            version: this.version,
            year: this.year,
            chassi: this.chassi,
            colorId: this.colorId,
            type: this.type
          })
        });

        if (response.status === 204) {
          this.router.transitionTo('/vehicles');
        } else {
          const data = await response.json();
          const errors = {};
          data.errors.forEach(({
            fieldName,
            message
          }) => errors[fieldName] = message);
          this.error = errors;
        }
      } catch (err) {
        console.log(err);
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "plate", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "brand", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "model", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "year", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "chassi", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "imageUrl", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "colorId", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "error", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "colors", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "models", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "brands", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeColor", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "changeColor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeType", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "changeType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeBrand", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "changeBrand"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeModel", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "changeModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submit", [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = VehicleFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, VehicleFormComponent);
});
;define("ember-quickstart/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-quickstart/controllers/vehicles", ["exports", "fetch"], function (_exports, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let VehiclesController = (_dec = Ember._tracked, _dec2 = Ember.inject.service, _dec3 = Ember.inject.service, _dec4 = Ember._action, (_class = class VehiclesController extends Ember.Controller {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "vehicles", _descriptor, this);

      _initializerDefineProperty(this, "session", _descriptor2, this);

      _initializerDefineProperty(this, "router", _descriptor3, this);

      _defineProperty(this, "queryParams", ['page', 'size']);

      _defineProperty(this, "page", 1);

      _defineProperty(this, "size", 6);
    }

    async deleteVehicle(id) {
      await (0, _fetch.default)(`http://localhost:3333/vehicle/${id}`, {
        method: 'DELETE'
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "vehicles", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "session", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteVehicle", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "deleteVehicle"), _class.prototype)), _class));
  _exports.default = VehiclesController;
});
;define("ember-quickstart/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("ember-quickstart/helpers/app-version", ["exports", "ember-quickstart/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-quickstart/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("ember-quickstart/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-quickstart/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-quickstart/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-quickstart/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-quickstart/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-quickstart/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-quickstart/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("ember-quickstart/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-quickstart/initializers/export-application-global", ["exports", "ember-quickstart/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-quickstart/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-quickstart/models/vehicle", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let VehicleModel = (_class = class VehicleModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "plate", _descriptor, this);

      _initializerDefineProperty(this, "brand", _descriptor2, this);

      _initializerDefineProperty(this, "model", _descriptor3, this);

      _initializerDefineProperty(this, "version", _descriptor4, this);

      _initializerDefineProperty(this, "year", _descriptor5, this);

      _initializerDefineProperty(this, "chassi", _descriptor6, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "plate", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "brand", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "model", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "version", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "year", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "chassi", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = VehicleModel;
});
;define("ember-quickstart/router", ["exports", "ember-quickstart/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('vehicles');
    this.route('vehicles-create');
    this.route('vehicle', {
      path: '/vehicle/:vehicle_id'
    });
  });
});
;define("ember-quickstart/routes/vehicle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let VehicleRoute = (_dec = Ember.inject.service, (_class = class VehicleRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    model(params) {
      const {
        vehicle_id
      } = params;
      return vehicle_id;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = VehicleRoute;
});
;define("ember-quickstart/routes/vehicles-create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class VehiclesCreateRoute extends Ember.Route {}

  _exports.default = VehiclesCreateRoute;
});
;define("ember-quickstart/routes/vehicles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class VehiclesRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", {
        page: {
          refreshModel: true
        },
        size: {
          refreshModel: true
        }
      });
    }

    model(params) {
      return this.store.query('vehicle', {
        page: params.page,
        per_page: params.size
      });
    }

  }

  _exports.default = VehiclesRoute;
});
;define("ember-quickstart/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("ember-quickstart/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-quickstart/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("ember-quickstart/serializers/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _emberData.default.JSONAPISerializer {
    normalizeQueryResponse(store, clazz, payload) {
      const result = super.normalizeQueryResponse(...arguments);
      result.meta = result.links || {};

      if (payload.links) {
        result.meta.pagination = this.createPageMeta(payload.links);
      }

      return result;
    }

    createPageMeta(data) {
      let meta = {};
      Object.keys(data).forEach(type => {
        const link = data[type];
        meta[type] = {};
        let a = document.createElement('a');
        a.href = link;
        a.search.slice(1).split('&').forEach(pairs => {
          const [param, value] = pairs.split('=');

          if (param == 'page[number]') {
            meta[type].number = parseInt(value);
          }

          if (param == 'page[size]') {
            meta[type].size = parseInt(value);
          }
        });
        a = null;
      });
      return meta;
    }

  }

  _exports.default = ApplicationSerializer;
});
;define("ember-quickstart/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("ember-quickstart/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("ember-quickstart/services/session", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SessionService = (_dec = Ember.inject.service, (_class = class SessionService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SessionService;
});
;define("ember-quickstart/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("ember-quickstart/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sIQuU+5a",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,0],[\"EmberQuickstart\"],null]],[2,\"\\n\"],[10,\"nav\"],[14,0,\"navbar navbar-light bg-light\"],[12],[2,\"\\n  \"],[8,\"link-to\",[],[[\"@route\"],[\"vehicles\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"a\"],[14,0,\"navbar-brand\"],[12],[2,\"\\n      \"],[10,\"img\"],[14,\"src\",\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png\"],[14,\"width\",\"30\"],[14,\"height\",\"30\"],[14,0,\"d-inline-block align-top\"],[14,\"alt\",\"\"],[12],[13],[2,\"\\n      Meus Veículos\\n    \"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n    \"],[1,[30,[36,2],[[30,[36,1],null,null]],null]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"page-title\",\"-outlet\",\"component\"]}",
    "moduleName": "ember-quickstart/templates/application.hbs"
  });

  _exports.default = _default;
});
;define("ember-quickstart/templates/vehicle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "i49u/zW2",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,0],[\"Editar veículo\"],null]],[2,\"\\n\"],[10,\"section\"],[14,0,\"mt-4 card-container\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"Editar veículo\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"fields\"],[12],[2,\"\\n        \"],[8,\"vehicle-edit-form\",[],[[\"@paramId\"],[[32,0,[\"vehicle_id\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[1,[30,[36,2],[[30,[36,1],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"page-title\",\"-outlet\",\"component\"]}",
    "moduleName": "ember-quickstart/templates/vehicle.hbs"
  });

  _exports.default = _default;
});
;define("ember-quickstart/templates/vehicles-create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KiEueHsq",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,0],[\"Cadastro de veículo\"],null]],[2,\"\\n\"],[10,\"section\"],[14,0,\"mt-4 card-container\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"Cadastrar novo veículo\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"fields\"],[12],[2,\"\\n        \"],[8,\"vehicle-form\",[],[[],[]],null],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[1,[30,[36,2],[[30,[36,1],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"page-title\",\"-outlet\",\"component\"]}",
    "moduleName": "ember-quickstart/templates/vehicles-create.hbs"
  });

  _exports.default = _default;
});
;define("ember-quickstart/templates/vehicles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zfMqX7MZ",
    "block": "{\"symbols\":[\"value\",\"key\",\"vehicle\",\"@model\"],\"statements\":[[1,[30,[36,4],[\"Veículos\"],null]],[2,\"\\n\"],[10,\"section\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"d-flex title mt-3\"],[12],[2,\"\\n    \"],[10,\"h4\"],[12],[2,\"Seus veículos\"],[13],[2,\"\\n    \"],[8,\"link-to\",[],[[\"@route\"],[\"vehicles-create\"]],[[\"default\"],[{\"statements\":[[10,\"button\"],[14,0,\"btn btn-primary\"],[14,4,\"button\"],[12],[2,\"Novo Veículo\"],[13]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vehicle-list mt-3 row justify-content-md-center\"],[12],[2,\"\\n\"],[6,[37,2],[[30,[36,5],[[30,[36,5],[[32,4]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"vehicle-cart\",[],[[\"@vehicle\",\"@delete\"],[[32,3],[34,3]]],null],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row justify-content-center\"],[12],[2,\"\\n\"],[6,[37,6],[[32,4,[\"length\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,4,[\"meta\",\"pagination\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[14,0,\"ml-3\"],[12],[2,\"\\n      \"],[8,\"link-to\",[],[[\"@route\",\"@query\"],[\"vehicles\",[30,[36,0],null,[[\"page\"],[[32,1,[\"number\"]]]]]]],[[\"default\"],[{\"statements\":[[1,[32,2]]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1,2]}]]]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"h3\"],[12],[2,\"Você não possui nenhum veículo cadastrado\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"hash\",\"-each-in\",\"each\",\"deleteVehicle\",\"page-title\",\"-track-array\",\"if\"]}",
    "moduleName": "ember-quickstart/templates/vehicles.hbs"
  });

  _exports.default = _default;
});
;define("ember-quickstart/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("ember-quickstart/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("ember-quickstart/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("ember-quickstart/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('ember-quickstart/config/environment', [], function() {
  var prefix = 'ember-quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-quickstart/app")["default"].create({"name":"ember-quickstart","version":"0.0.0+bec8d21b"});
          }
        
//# sourceMappingURL=ember-quickstart.map
