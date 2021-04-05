import {
  getDebugInfo,
  baseObjectBuilder,
  ObjectMock,
  ListObjectMock,
  slugifyPropertyKey,
} from "@digital-engine/bubble-plugin-helpers";

export const alternativeObjectBuilder = () => {
  return {
    ...baseObjectBuilder(),
    hello: "world",
    complex_field__1: "loremipsum",
  };
};

export const getLookupFieldValue = (
  field,
  object
) => {
  const field_slugified = slugifyPropertyKey(
    field
  );
  if (
    !object
      .listProperties()
      .includes(field_slugified)
  ) {
    throw new Error(
      `Unknown field ${field_slugified}`
    );
  }
  return object.get(field_slugified);
};

function mockProperties() {
  return {
    objects_type: "custom.myobject", // String (type ID)
    input_objects: new ListObjectMock(2), // List of Objects
    selected_object: new ObjectMock(
      alternativeObjectBuilder
    ), // Object
    lookup_field: "Complex Field #1",
  };
}

function runServer(properties, context) {
  const inputs = properties.input_objects.get(
    0,
    properties.input_objects.length()
  );
  const lookupValue = getLookupFieldValue(
    properties.lookup_field,
    properties.selected_object
  );
  return {
    lookupValue: lookupValue,
    inputsLength: inputs.length,
    outputDebug: JSON.stringify(
      {
        lookupField: properties.lookup_field,
        input0: getDebugInfo(inputs[0], false),
        selected: getDebugInfo(
          properties.selected_object,
          false
        ),
      },
      null,
      2
    ),
  };
}

export { runServer, mockProperties };
