//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps tests
import { describe, expect, it } from "bun:test"
// @deps astTF
import { hello } from "./utils"


describe("Utils", () => {
  it("should add", () => {
    expect(hello(1,2)).toBe(3)
  })
}) //:: Utils
