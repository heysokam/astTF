//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps libs
import { Type as T, TSchema } from "@sinclair/typebox"

export const Suffix = ".schema.json"

/**
 * @description Collection of references that will be converted into the specification's .schema files.
 * */
export const Refs = {
  // Elements: Base
  Identifier     : "identifier"      + Suffix,
  Type           : "type"            + Suffix,
  LiteralValue   : "literal.value"   + Suffix,
  Integer        : "integer"         + Suffix,
  Strng          : "string"          + Suffix,
  Literal        : "literal"         + Suffix,
  Data           : "data"            + Suffix,
  Return         : "return"          + Suffix,
  // Elements: General
  Expression     : "expression"      + Suffix,
  ExpressionList : "expression.list" + Suffix,
  Statement      : "statement"       + Suffix,
  StatementList  : "statement.list"  + Suffix,
  // Elements: TopLevel
  Procedure      : "procedure"       + Suffix,
  Variable       : "variable"        + Suffix,
  // Root Data
  Metadata       : "metadata"        + Suffix,
  astTF          : "astTF"           + Suffix
}


//______________________________________
// @section Elements: Base
//____________________________
export const Identifier = T.String({$id: Refs.Identifier,
description:`@description The Identifier used to represent this Element.`
})

export const Type = T.Object({
  name  :T.Required(Identifier),
}, {$id: Refs.Type,
description:`@description Type.TODO:`
}) // TODO:

export const LiteralValue = T.String({$id: Refs.LiteralValue,
description:`@description LiteralValue.TODO:`
}) // TODO:

export const Integer = T.Object({
  signed  :T.Boolean(),
  value   :T.Ref(Refs.LiteralValue)
}, {$id: Refs.Integer,
description:`@description Integer.TODO:`
}) // TODO:

export const Strng = T.Object({
  multiline  :T.Boolean(),
  value      :T.Ref(Refs.LiteralValue)
}, {$id: Refs.Strng,
description:`@description String.TODO:`
}) // TODO:

export const Literal = T.Union([
  T.Ref(Refs.Integer),
  T.Ref(Refs.Strng),
], {$id: Refs.Literal,
description:`@description Literal.TODO:`
}) // TODO:

export const Data = T.Object({
  value  :T.Optional(T.Ref(Refs.Expression)),
  read   :T.Boolean(),
  write  :T.Boolean(),
}, {$id: Refs.Data,
description: `@description Data.TODO:`
}) // TODO:

export const Return = T.Ref(Refs.Expression, {$id: Refs.Return,
description:`@description Return.TODO:`
}) // TODO:

//______________________________________
// @section Elements: General
//____________________________
export const Expression = T.Union([
  T.Ref(Refs.Literal),
], {$id: Refs.Expression,
description:`@description Expression.TODO:`
}) // TODO:

export const ExpressionList = T.Array(T.Ref(Refs.Expression), {$id: Refs.ExpressionList,
description:`@description ExpressionList.TODO:`
}) // TODO:


export const Statement = T.Union([
  // T.Ref(Refs.Procedure),
  T.Ref(Refs.Return),
  T.Ref(Refs.Variable),
], {$id: Refs.Statement,
description:`@description Statement.TODO:`
}) // TODO:

export const StatementList = T.Array(T.Ref(Refs.Statement), {$id: Refs.StatementList,
description:`@description StatementList.TODO:`
}) // TODO:


//______________________________________
// @section Elements: TopLevel
//____________________________
export const Procedure = T.Object({
  name  :T.Required(Identifier),
  retT  :T.Optional(T.Ref(Refs.Type)),
  body  :T.Optional(T.Ref(Refs.StatementList))
}, {$id: Refs.Procedure,
description:`@description Procedure.TODO:`
}) // TODO:

export const Variable = T.Object({
  name     :T.Required(Identifier),
  data     :T.Ref(Refs.Data),
  runtime  :T.Boolean(),
}, {$id: Refs.Variable,
description: `@description Variable.TODO:`
}) // TODO:

export const TopLevel = T.Union([
  T.Ref(Refs.Procedure),
  T.Ref(Refs.Variable),
], {
description:`@description Node declared/described at the toplevel of the source code`
})


//______________________________________
// @section Root Data
//____________________________
export const Language = T.String({
description:`@description Identifier that represents the target language of the AST
@note The parser and code generators are responsible for creating a standard for the contents of this type.`
})

export const Description  = T.String({
description:`@description Human-readable string that describes the contents of the tree.`
})

export const Metadata = T.Object({
  language     :T.Optional(Language),
  description  :T.Optional(Description)
  }, {$id: Refs.Metadata,
description:`@description Metadata describing the contents of the file`
})

export const astTF = T.Object({
  metadata  :T.Ref(Refs.Metadata),
  data      :T.Array(TopLevel, { description:`@description List of TopLevel nodes in the tree.` }),
}, {$id: Refs.astTF,
description:`@description Entry point of an astTF file`
})


//______________________________________
// @section Specification Files
//____________________________
export const Specification = [
  // Elements: Base
  { id: Refs.Identifier,     schema: Identifier     },
  { id: Refs.Type,           schema: Type           },
  { id: Refs.LiteralValue,   schema: LiteralValue   },
  { id: Refs.Integer,        schema: Integer        },
  { id: Refs.Strng,          schema: Strng          },
  { id: Refs.Literal,        schema: Literal,       },
  { id: Refs.Data,           schema: Data           },
  { id: Refs.Return,         schema: Return         },
  // Elements: General
  { id: Refs.Expression,     schema: Expression     },
  { id: Refs.ExpressionList, schema: ExpressionList },
  { id: Refs.Statement,      schema: Statement      },
  { id: Refs.StatementList,  schema: StatementList  },
  // Elements: TopLevel
  { id: Refs.Procedure,      schema: Procedure      },
  { id: Refs.Variable,       schema: Variable       },
  // Root Data
  { id: Refs.Metadata,       schema: Metadata       },
  { id: Refs.astTF,          schema: astTF          },
]


//______________________________________
// @section Schema Helper Tools
//____________________________
export function toJson (schema :TSchema) :string { return JSON.stringify(schema, null, 2) }

