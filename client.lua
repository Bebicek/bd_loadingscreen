
local spawn1 = false							

AddEventHandler("playerSpawned", function () 	-- Wait for player to spawn
	if not spawn1 then
		ShutdownLoadingScreenNui()				-- Close loading screen resource
		spawn1 = true
	end
end)