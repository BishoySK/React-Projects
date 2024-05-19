import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isEditing, mutate: editCabin } = useMutation({
        mutationFn: ({ newCabinDate, id }) => createEditCabin(newCabinDate, id),
        onSuccess: () => {
            toast.success("Cabin successfully edited");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { isEditing, editCabin };
}
