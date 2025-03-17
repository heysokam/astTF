//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps tests
import { describe, expect, it } from "bun:test"
// @deps astTF
import * as Dummy from "@tools/dummy"


describe("Dummy", () => {
  describe("hello", () => {
    it("should add 1+2", () => { expect(Dummy.hello(1,2)).toBe(3) })
    it("should add 3+4", () => { expect(Dummy.hello(3,4)).not.toBe(3) })
  }) //:: Utils.hello
}) //:: Utils

