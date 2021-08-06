'use strict';

define("ember-quickstart/tests/integration/components/vehicle-cart-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | vehicle-cart', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <VehicleCart />
      */
      {
        "id": "Nb+pDIQE",
        "block": "{\"symbols\":[],\"statements\":[[8,\"vehicle-cart\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <VehicleCart>
              template block text
            </VehicleCart>
          
      */
      {
        "id": "EN3MjX79",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"vehicle-cart\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-quickstart/tests/integration/components/vehicle-edit-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | vehicle-edit-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <VehicleEditForm />
      */
      {
        "id": "NX05V1AB",
        "block": "{\"symbols\":[],\"statements\":[[8,\"vehicle-edit-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <VehicleEditForm>
              template block text
            </VehicleEditForm>
          
      */
      {
        "id": "oDpl5Jbq",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"vehicle-edit-form\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-quickstart/tests/integration/components/vehicle-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | vehicle-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <VehicleForm />
      */
      {
        "id": "cX5/vazN",
        "block": "{\"symbols\":[],\"statements\":[[8,\"vehicle-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <VehicleForm>
              template block text
            </VehicleForm>
          
      */
      {
        "id": "V9Yn3rBl",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"vehicle-form\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-quickstart/tests/test-helper", ["ember-quickstart/app", "ember-quickstart/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("ember-quickstart/tests/unit/controllers/vehicles-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | vehicles', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:vehicles');
      assert.ok(controller);
    });
  });
});
define("ember-quickstart/tests/unit/models/vehicle-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | vehicle', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('vehicle', {});
      assert.ok(model);
    });
  });
});
define("ember-quickstart/tests/unit/routes/vehicle-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | vehicle', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:vehicle');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/vehicles-create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | vehicles-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:vehicles-create');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/vehicles-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | vehicles', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:vehicles');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('ember-quickstart/config/environment', [], function() {
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

require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
