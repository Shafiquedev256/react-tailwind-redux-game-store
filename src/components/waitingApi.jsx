
export const Waiting = ()=>{
  
  return(
    <>
<div class="border m-2 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-sm bg-gray-300 h-28 w-28"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-gray-300 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          <div class="h-2 bg-gray-300 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
</div>
    </>
    )
}