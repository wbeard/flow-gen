// type Action = {
//   type: string;
//   payload: ?Object;
//   meta: any;
// }

export default {
  "errors": [

  ],
  "tokens": [

  ],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 5,
      "column": 1
    }
  },
  "range": [
    0,
    66
  ],
  "body": [
    {
      "type": "TypeAlias",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 1
        }
      },
      "range": [
        0,
        66
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 5
          },
          "end": {
            "line": 1,
            "column": 11
          }
        },
        "range": [
          5,
          11
        ],
        "name": "Action",
        "typeAnnotation": null,
        "optional": false
      },
      "typeParameters": null,
      "right": {
        "type": "ObjectTypeAnnotation",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 14
          },
          "end": {
            "line": 5,
            "column": 1
          }
        },
        "range": [
          14,
          66
        ],
        "properties": [
          {
            "type": "ObjectTypeProperty",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 2,
                "column": 14
              }
            },
            "range": [
              18,
              30
            ],
            "key": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 2,
                  "column": 2
                },
                "end": {
                  "line": 2,
                  "column": 6
                }
              },
              "range": [
                18,
                22
              ],
              "name": "type",
              "typeAnnotation": null,
              "optional": false
            },
            "value": {
              "type": "StringTypeAnnotation",
              "loc": {
                "source": null,
                "start": {
                  "line": 2,
                  "column": 8
                },
                "end": {
                  "line": 2,
                  "column": 14
                }
              },
              "range": [
                24,
                30
              ]
            },
            "optional": false,
            "static": false
          },
          {
            "type": "ObjectTypeProperty",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 3,
                "column": 18
              }
            },
            "range": [
              34,
              50
            ],
            "key": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 2
                },
                "end": {
                  "line": 3,
                  "column": 9
                }
              },
              "range": [
                34,
                41
              ],
              "name": "payload",
              "typeAnnotation": null,
              "optional": false
            },
            "value": {
              "type": "NullableTypeAnnotation",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 11
                },
                "end": {
                  "line": 3,
                  "column": 18
                }
              },
              "range": [
                43,
                50
              ],
              "typeAnnotation": {
                "type": "GenericTypeAnnotation",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 3,
                    "column": 12
                  },
                  "end": {
                    "line": 3,
                    "column": 18
                  }
                },
                "range": [
                  44,
                  50
                ],
                "id": {
                  "type": "Identifier",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 3,
                      "column": 12
                    },
                    "end": {
                      "line": 3,
                      "column": 18
                    }
                  },
                  "range": [
                    44,
                    50
                  ],
                  "name": "Object",
                  "typeAnnotation": null,
                  "optional": false
                },
                "typeParameters": null
              }
            },
            "optional": false,
            "static": false
          },
          {
            "type": "ObjectTypeProperty",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 11
              }
            },
            "range": [
              54,
              63
            ],
            "key": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 2
                },
                "end": {
                  "line": 4,
                  "column": 6
                }
              },
              "range": [
                54,
                58
              ],
              "name": "meta",
              "typeAnnotation": null,
              "optional": false
            },
            "value": {
              "type": "AnyTypeAnnotation",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 8
                },
                "end": {
                  "line": 4,
                  "column": 11
                }
              },
              "range": [
                60,
                63
              ]
            },
            "optional": false,
            "static": false
          }
        ],
        "indexers": [

        ],
        "callProperties": [

        ]
      }
    }
  ],
  "comments": [

  ]
};
