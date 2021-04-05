import {
  ObjectMock,
  baseObjectBuilder,
} from "@digital-engine/bubble-plugin-helpers";
import {
  runServer,
  mockProperties,
  alternativeObjectBuilder,
  getLookupFieldValue,
} from "~src/serverAction";

describe("Test core functions", () => {
  test("Test mockProperties function", () => {
    const properties = mockProperties();
    expect(Object.keys(properties))
      .toMatchInlineSnapshot(`
      Array [
        "objects_type",
        "input_objects",
        "selected_object",
        "lookup_field",
      ]
    `);
    expect(
      Object.values(properties).map(
        (value) => typeof value
      )
    ).toMatchInlineSnapshot(`
      Array [
        "string",
        "object",
        "object",
        "string",
      ]
    `);
  });

  test("Test runServer function", () => {
    const properties = mockProperties();
    const context = null;
    const result = runServer(properties, context);
    expect(Object.keys(result))
      .toMatchInlineSnapshot(`
      Array [
        "lookupValue",
        "inputsLength",
        "outputDebug",
      ]
    `);
  });
});

const mockedBuilder = () => {
  return {
    ...baseObjectBuilder(),
    field__1: "value of Field #1",
  };
};

describe("Test side functions", () => {
  test("Test getLookupFieldValue", () => {
    const mockedObject = new ObjectMock(
      mockedBuilder
    );
    expect(
      getLookupFieldValue(
        "Field #1",
        mockedObject
      )
    ).toBe("value of Field #1");
  });

  test("Test alternativeObjectBuilder", () => {
    const buildedKw = alternativeObjectBuilder();
    expect(buildedKw).toMatchInlineSnapshot(
      {
        _id: expect.any(String),
      },
      `
      Object {
        "Created By": "admin_user_bubble_project",
        "Created Date": "2021-03-27T21:59:57.581Z",
        "Modified Date": "2021-03-28T09:41:59.126Z",
        "Slug": null,
        "_id": Any<String>,
        "complex_field__1": "loremipsum",
        "hello": "world",
      }
    `
    );
    const buildedObject = new ObjectMock(
      alternativeObjectBuilder
    );
    expect(buildedObject).toMatchInlineSnapshot(
      {
        _fields: expect.objectContaining({
          "Created By":
            "admin_user_bubble_project",
          "Created Date":
            "2021-03-27T21:59:57.581Z",
          "Modified Date":
            "2021-03-28T09:41:59.126Z",
          Slug: null,
          _id: expect.any(String),
          complex_field__1: "loremipsum",
          hello: "world",
        }),
      },
      `
      Object {
        "_fields": ObjectContaining {
          "Created By": "admin_user_bubble_project",
          "Created Date": "2021-03-27T21:59:57.581Z",
          "Modified Date": "2021-03-28T09:41:59.126Z",
          "Slug": null,
          "_id": Any<String>,
          "complex_field__1": "loremipsum",
          "hello": "world",
        },
        "get": [Function],
        "listProperties": [Function],
      }
    `
    );
  });
});
